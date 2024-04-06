import { paths } from '@/shared/constants';
import { getRoute } from '@/utils';

export const createAdmin = async <T>(): Promise<T> => {
  try {
    const response = await fetch(getRoute(paths.admins));

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('server error');
  }
};
