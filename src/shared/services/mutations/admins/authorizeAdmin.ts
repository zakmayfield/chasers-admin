import { fetchService } from '@/shared/helpers/fetchService';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
} from '@/shared/types';

export const authorizeAdmin = async (
  body: AuthorizeAdminRequestData
): Promise<AuthorizeAdminResponseData> =>
  await fetchService({
    route: '/admins',
    options: {
      urlExtension: '/authorize',
      config: {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    },
  });
