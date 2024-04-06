import { BASE_URL } from '@/shared/constants';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function merge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRoute(path: string) {
  return BASE_URL + path;
}
