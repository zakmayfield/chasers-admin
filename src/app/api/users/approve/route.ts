import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
} from '@/shared/helpers/api';
import { validateSession } from '@/shared/helpers/session';
import {
  UserApprovalRequestData,
  UserApprovalResponseData,
} from '@/shared/types';

async function handler(req: Request) {
  const session = await getAuthSession();
  const { id: sessionId } = validateSession({ session });
  if (!sessionId) {
    return new Response('unauthenticated', { status: 401 });
  }

  const body: UserApprovalRequestData = await req.json();
  const { id } = body;

  if (!id) {
    return new Response('a valid ID is required to make this request', {
      status: 400,
    });
  }

  try {
    await db.user.update({
      where: { id },
      data: {
        isApproved: true,
      },
    });

    const response = successResponseHandler<UserApprovalResponseData>({
      success: true,
    });
    return response;
  } catch (error) {
    const errorResponse = errorResponseHandler(error);
    return errorResponse;
  }
}

export { handler as PUT };
