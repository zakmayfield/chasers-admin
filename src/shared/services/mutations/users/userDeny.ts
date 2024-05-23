import { fetchHandler } from '@/shared/helpers';
import { UserDenyApprovalRequestData } from '@/shared/types';

export const userDeny = async (body: UserDenyApprovalRequestData) =>
  await fetchHandler({
    route: '/users',
    options: {
      urlExtension: '/deny',
      config: {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    },
  });
