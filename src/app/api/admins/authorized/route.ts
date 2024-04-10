import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import { authorizePermissions } from '@/shared/helpers';
import {
  apiErrorHandler,
  apiResponseHandler,
  apiSessionErrorHandler,
} from '@/shared/helpers/api';
import { GetAuthorizedAdminsResponseData } from '@/shared/types';

async function handler() {
  const session = await getAuthSession();
  const sessionError = apiSessionErrorHandler(session);
  if (sessionError) sessionError;

  const userId = session?.user.id!;

  try {
    // const permissionsError = await authorizePermissions(userId, [
    //   'admin:super',
    // ]);
    // if (permissionsError) {
    //   return permissionsError;
    // }

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
