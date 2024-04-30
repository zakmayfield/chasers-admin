import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
} from '@/shared/helpers/api';
import { validateRole } from '@/shared/helpers/role';
import { validateSession } from '@/shared/helpers/session';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
  Roles,
} from '@/shared/types';

async function handler(req: Request) {
  const session = await getAuthSession();

  const { id } = validateSession({ session });

  if (!id) {
    return new Response('unauthenticated', { status: 401 });
  }

  const body: AuthorizeAdminRequestData = await req.json();

  const { email } = body;
  if (!email) {
    return new Response('a valid email is required to make this request', {
      status: 400,
    });
  }

  try {
    const { isAuthorized } = await validateRole({
      userRole: session!.user.role,
      accessLevel: Roles.SUPER,
    });

    if (!isAuthorized) {
      return new Response('unauthorized', { status: 401 });
    }
    const authorizedAdminRecord = await db.authorizedAdmin.create({
      data: {
        email,
      },
    });

    const responseData: AuthorizeAdminResponseData = {
      ...authorizedAdminRecord,
      success: true,
    };

    const response =
      successResponseHandler<AuthorizeAdminResponseData>(responseData);

    return response;
  } catch (error) {
    const errorResponse = errorResponseHandler(error);
    return errorResponse;
  }
}

export { handler as POST };
