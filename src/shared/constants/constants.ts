import { QueryKeys, QueryKeysEnum } from '@/shared/types';
import { Paths } from '@/shared/types';

//^ URLS
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

//^ PATHS
export const paths: Paths = {
  dashboard: '/dashboard',
  users: '/users',
  orders: '/orders',
  admins: '/admins',
};

export const queryKeys: QueryKeys = {
  admins: {
    all: QueryKeysEnum.ALL_ADMINS,
  },
};
