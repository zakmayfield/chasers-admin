import { fetchHandler } from '@/shared/helpers';
import {
  ChangePasswordRequestData,
  ChangePasswordResponseData,
  CreateAdminResponseData,
} from '@/shared/types';

export const changePassword = async (
  body: ChangePasswordRequestData
): Promise<ChangePasswordResponseData> =>
  await fetchHandler({
    route: '/auth',
    options: {
      urlExtension: '/change-password',
      config: {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    },
  });
