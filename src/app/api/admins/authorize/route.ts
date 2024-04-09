import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import { apiErrorHandler } from '@/shared/helpers';
import { apiSessionErrorHandler } from '@/shared/helpers/apiSessionErrorHandler';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
} from '@/shared/types';

async function handler(req: Request) {
  const session = await getAuthSession();

  const authError = await apiSessionErrorHandler(session);
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

    const response: AuthorizeAdminResponseData = {
      ...authorizedAdminRecord,
      success: true,
    };

    return new Response(JSON.stringify(response));
  } catch (error) {
    return apiErrorHandler(error);
  }
}

export { handler as POST };
