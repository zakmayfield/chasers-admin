import { fetchHandler } from '@/shared/helpers';
import { UserApprovalRequestData } from '@/shared/types';

export const userApproval = async (body: UserApprovalRequestData) =>
  await fetchHandler({
    route: '/users',
    options: {
      urlExtension: '/approve',
      config: {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    },
  });
