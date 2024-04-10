import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  apiResponseHandler,
  apiErrorHandler,
  apiSessionErrorHandler,
} from '@/shared/helpers/api';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
} from '@/shared/types';

async function handler(req: Request) {
  const session = await getAuthSession();

  const authError = apiSessionErrorHandler(session);
  if (authError) {
    return authError;
  }

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
      apiResponseHandler<AuthorizeAdminResponseData>(responseData);

    return response;
  } catch (error) {
    const errorResponse = apiErrorHandler(error);
    return errorResponse;
  }
}

export { handler as POST };
