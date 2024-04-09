import { fetchService } from '@/shared/helpers/fetchService';

export const createAdmin = async () => await fetchService({ path: '/admins' });

// export const createAdmin = async <T>(): Promise<T> => {
//   try {
//     const response = await fetch(getUrl(paths.admins));

//     if (!response.ok) {
//       throw new Error(await response.text());
//     }

//     return response.json();
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(error.message);
//     }

//     throw new Error('server error');
//   }
// };
