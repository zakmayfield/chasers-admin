import { paths } from '@/shared/constants';
import { fetchService } from '@/shared/helpers';

export const getAdmins = async () =>
  await fetchService({
    path: paths.admins,
    options: { urlExtension: '/all', config: {} },
  });
