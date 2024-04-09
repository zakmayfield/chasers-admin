import { paths } from '@/shared/constants';
import { fetchService } from '@/shared/helpers';
import { GetAuthorizedAdminsResponseData } from '@/shared/types';

export const getAuthorizedAdmins =
  async (): Promise<GetAuthorizedAdminsResponseData> =>
    await fetchService({
      path: paths.admins,
      options: {
        urlExtension: '/authorized',
      },
    });
