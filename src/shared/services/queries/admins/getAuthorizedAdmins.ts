import { paths } from '@/shared/constants';
import { fetchService } from '@/shared/helpers';
import { AuthorizedAdminsResponseData } from '@/shared/types';

export const getAuthorizedAdmins =
  async (): Promise<AuthorizedAdminsResponseData> =>
    await fetchService({
      path: paths.admins,
      options: {
        urlExtension: '/authorized',
      },
    });
