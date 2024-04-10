import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  apiErrorHandler,
  apiResponseHandler,
  apiSessionErrorHandler,
} from '@/shared/helpers/api';
import { GetAuthorizedAdminsResponseData } from '@/shared/types';

async function handler() {
  const session = await getAuthSession();
  // TODO: send better data back with these helpers?
  const sessionError = apiSessionErrorHandler(session);
  if (sessionError) sessionError;

  try {
    // TODO implement Role based helpers

    const authorizedAdmins = await db.authorizedAdmin.findMany();

    const response =
      apiResponseHandler<GetAuthorizedAdminsResponseData>(authorizedAdmins);

    return response;
  } catch (error) {
    const errorResponse = apiErrorHandler(error);
    return errorResponse;
  }
}

export { handler as GET };
