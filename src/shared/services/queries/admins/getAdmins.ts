import { paths } from '@/shared/constants';
import { fetchService } from '@/shared/helpers';
import { GetAdminsData } from '@/shared/types';

export const getAdmins = async (): Promise<GetAdminsData> =>
  await fetchService({
    path: paths.admins,
    options: { urlExtension: '/all', config: {} },
  });
