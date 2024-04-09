import { paths } from '@/shared/constants';
import { fetchService } from '@/shared/helpers';
import { GetAdminsResponseData } from '@/shared/types';

export const getAdmins = async (): Promise<GetAdminsResponseData> =>
  await fetchService({
    path: paths.admins,
  });
