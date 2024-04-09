import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import { Roles, SecureUser } from '@/shared/types';

async function handler() {
  const session = await getAuthSession();
  if (!session || !session.user) {
    return new Response('authentication error', { status: 401 });
  }

  try {
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

    const filteredAdmins = admins.filter(
      (admin) => admin.id !== session.user.id
    );

    return new Response(JSON.stringify(admins));
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response('unexpected server error', { status: 500 });
  }
}

export { handler as GET };
