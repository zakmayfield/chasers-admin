import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
} from '@/shared/helpers/api';
import { validateSession } from '@/shared/helpers/session';
import { GetAuthorizedAdminsResponseData } from '@/shared/types';

async function handler() {
  const session = await getAuthSession();

  const { id } = validateSession({ session });

  if (!id) new Response('unauthenticated', { status: 401 });

  try {
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
