import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import { errorResponseHandler } from '@/shared/helpers/api';
import { validateRole } from '@/shared/helpers/role';
import { validateSession } from '@/shared/helpers/session';
import { Roles, SecureUser } from '@/shared/types';

async function handler() {
  const session = await getAuthSession();

  const { id } = validateSession({ session });

  if (!id) {
    return new Response('unauthenticated', { status: 401 });
  }

  try {
    const { isAuthorized } = await validateRole({
      userRole: session!.user.role,
      accessLevel: Roles.SUPER,
    });

    if (!isAuthorized) {
      return new Response('unauthorized', { status: 401 });
    }

    console.log({ isAuthorized });

    const admins: SecureUser[] = await db.user.findMany({
      where: {
        role: Roles.ADMIN,
      },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        permissions: {
          select: {
            permissionId: true,
            permission: true,
          },
        },
      },
    });

    const filteredAdmins = admins.filter((admin) => admin.id !== id);

    return new Response(JSON.stringify(filteredAdmins));
  } catch (error) {
    const errorResponse = errorResponseHandler(error);
    return errorResponse;
  }
}

export { handler as GET };
