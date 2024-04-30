import { fetchHandler } from '@/shared/helpers';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
} from '@/shared/types';

export const authorizeAdmin = async (
  body: AuthorizeAdminRequestData
): Promise<AuthorizeAdminResponseData> =>
  await fetchHandler({
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
