import { paths } from '@/shared/constants';
import { fetchService } from '@/shared/helpers';

export const getAuthorizedAdmins = async (): Promise<any> =>
  await fetchService({
    path: paths.admins,
    options: {
      urlExtension: '/authorized',
    },
  });
