import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
} from '@/shared/helpers/api';
import { validateSession } from '@/shared/helpers/session';
import {
  UserDenyApprovalRequestData,
  UserDenyApprovalResponseData,
} from '@/shared/types';

async function handler(req: Request) {
  const session = await getAuthSession();
  const { email } = validateSession({ session });
  if (!email) {
    return new Response('unauthenticated', { status: 401 });
  }

  const body: UserDenyApprovalRequestData = await req.json();
  const { id } = body;
  if (!id || typeof id !== 'string') {
    return new Response('a valid ID is required to make this request', {
      status: 400,
    });
  }

  try {
    await db.user.delete({
      where: { id },
    });

    const response = successResponseHandler<UserDenyApprovalResponseData>({
      success: true,
    });
    return response;
  } catch (error) {
    const errorResponse = errorResponseHandler(error);
    return errorResponse;
  }
}

export { handler as DELETE };
