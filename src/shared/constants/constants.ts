import { QueryKeys } from '@/shared/types';
import { Paths } from '@/shared/types';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// TODO: implement on middleware matcher
const matchingPaths = ['/dashboard', '/orders', '/users', '/admins'];

export const paths: Paths = {
  dashboard: '/dashboard',
  users: '/users',
  orders: '/orders',
  admins: '/admins',
};

export const queryKeys = {
  admins: {
    all: QueryKeys.ALL_ADMINS,
    authorized: QueryKeys.AUTHORIZED_ADMINS,
  },
};
