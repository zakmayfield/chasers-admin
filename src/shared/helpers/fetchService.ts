import { Path } from '@/shared/types';
import { getUrl } from '@/utils';

export const fetchService = async ({ path }: { path: Path }) => {
  try {
    const response = await fetch(getUrl(path));

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
