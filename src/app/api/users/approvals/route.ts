import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
} from '@/shared/helpers/api';
import { validateRole } from '@/shared/helpers/role';
import { validateSession } from '@/shared/helpers/session';
import { GetUsersAwaitingApprovalResponseData } from '@/shared/types';

async function handler() {
  const session = await getAuthSession();
  const { id } = validateSession({ session });
  if (!id) {
    return new Response('unauthenticated', { status: 401 });
  }

  try {
    const { isAuthorized } = await validateRole({
      userRole: session?.user.role!,
      accessLevel: 'ADMIN',
    });
    if (!isAuthorized) {
      return new Response('unauthorized', { status: 401 });
    }

    const usersAwaitingApproval = await db.user.findMany({
      where: {
        role: 'USER',
        AND: {
          isApproved: false,
        },
      },
      select: {
        id: true,
        email: true,
      },
    });

    const response =
      successResponseHandler<GetUsersAwaitingApprovalResponseData>({
        approvals: usersAwaitingApproval,
      });

    return response;
  } catch (error) {
    const errorResponse = errorResponseHandler(error);
    return errorResponse;
  }
}

export { handler as GET };
