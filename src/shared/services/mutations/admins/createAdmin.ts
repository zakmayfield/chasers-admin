import { fetchHandler } from '@/shared/helpers';
import {
  CreateAdminRequestData,
  CreateAdminResponseData,
} from '@/shared/types';

export const createAdmin = async (
  body: CreateAdminRequestData
): Promise<CreateAdminResponseData> =>
  await fetchHandler({
    route: '/admins',
    options: {
      urlExtension: '/create',
      config: {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    },
  });
