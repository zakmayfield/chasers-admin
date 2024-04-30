import { paths } from '@/shared/constants';
import { fetchHandler } from '@/shared/helpers';
import { GetAdminsResponseData } from '@/shared/types';

export const getAdmins = async (): Promise<GetAdminsResponseData> =>
  await fetchHandler({
    route: paths.admins,
  });
