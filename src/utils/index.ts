import { BASE_URL } from '@/shared/constants';
import { FetchService } from '@/shared/types';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function merge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUrl({ route, options }: FetchService) {
  const url = BASE_URL + '/api';

  if (options) {
    return url + route + options.urlExtension;
  }

  return url + route;
}
