import { FetchService } from '@/shared/types';
import { getUrl } from '@/utils';

export const fetchService = async ({ path, options }: FetchService) => {
  try {
    const response = await fetch(getUrl({ path, options }), {
      ...options?.config,
    });

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
