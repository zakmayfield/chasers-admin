import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
  validateSession,
} from '@/shared/helpers/api';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
} from '@/shared/types';

async function handler(req: Request) {
  const session = await getAuthSession();

  const { id } = validateSession({ session });

  if (!id) new Response('unauthenticated', { status: 401 });

  const body: AuthorizeAdminRequestData = await req.json();

  const { email } = body;
  if (!email) {
    return new Response('a valid email is required to make this request', {
      status: 400,
    });
  }

  try {
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
    const { result } = errorResponseHandler(error);
    return result;
  }
}

export { handler as POST };
