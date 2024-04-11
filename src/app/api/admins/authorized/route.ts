import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
} from '@/shared/helpers/api';
import { validateRole } from '@/shared/helpers/role';
import { validateSession } from '@/shared/helpers/session';
import { GetAuthorizedAdminsResponseData } from '@/shared/types';

async function handler() {
  const session = await getAuthSession();

  const { id } = validateSession({ session });

  if (!id) {
    return new Response('unauthenticated', { status: 401 });
  }

  try {
    const { isAuthorized } = await validateRole({
      userRole: session!.user.role,
      accessLevel: 'ADMIN',
    });

    if (!isAuthorized) {
      return new Response('unauthorized', { status: 401 });
    }

    const authorizedAdmins = await db.authorizedAdmin.findMany();

    const response =
      successResponseHandler<GetAuthorizedAdminsResponseData>(authorizedAdmins);

    return response;
  } catch (error) {
    const errorResponse = errorResponseHandler(error);
    return errorResponse;
  }
}

export { handler as GET };
