import { fetchHandler } from '@/shared/helpers';
import { GetUsersAwaitingApprovalResponseData } from '@/shared/types';

export const getUsersAwaitingApproval =
  async (): Promise<GetUsersAwaitingApprovalResponseData> =>
    await fetchHandler({
      route: '/users',
      options: {
        urlExtension: '/approvals',
      },
    });
