import { BASE_URL } from '@/shared/constants';
import { FetchService } from '@/shared/types';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function merge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUrl({ path, options }: FetchService) {
  const url = BASE_URL + '/api';

  if (options) {
    return url + path + options.urlExtension;
  }

  return url + path;
}
