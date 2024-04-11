import { paths } from '@/shared/constants';
import { fetchHandler } from '@/shared/helpers';
import { GetAuthorizedAdminsResponseData } from '@/shared/types';

export const getAuthorizedAdmins =
  async (): Promise<GetAuthorizedAdminsResponseData> =>
    await fetchHandler({
      route: paths.admins,
      options: {
        urlExtension: '/authorized',
      },
    });
