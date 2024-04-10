import { FetchService } from '@/shared/types';
import { getUrl } from '@/utils';

const fetchService = async ({ route, options }: FetchService) => {
  try {
    const url = getUrl({ route, options });

    const response = await fetch(url, {
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

export default fetchService;
