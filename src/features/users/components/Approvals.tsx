'use client';
import {
  ContainerFull,
  FlexCol,
  FlexRow,
  Loader,
  Pagination,
} from '@/shared/components';
import { CancelIcon, CheckIcon } from '@/shared/components/Icons';
import { useCustomQuery } from '@/shared/hooks';
import { getUsersAwaitingApproval } from '@/shared/services/queries/users';
import {
  QueryKeys,
  GetUsersAwaitingApprovalResponseData,
} from '@/shared/types';
import { merge } from '@/utils';
import { FC } from 'react';

interface ApprovalsProps {
  className?: string;
}

export const Approvals: FC<ApprovalsProps> = ({ className }) => {
  const { data, isLoading } =
    useCustomQuery<GetUsersAwaitingApprovalResponseData>({
      queryKey: [QueryKeys.USER_APPROVALS],
      queryFn: getUsersAwaitingApproval,
    });

  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <FlexCol className='h-full'>
        <h2>Users Awaiting Approval</h2>

        <ContainerFull className='bg-chasers-primary h-full'>
          {isLoading ? (
            <Loader />
          ) : (
            <FlexCol>
              {data?.approvals.map((user) => (
                <ContainerFull key={user.id} className='border'>
                  <FlexRow className='items-center justify-between'>
                    <div>{user.email}</div>
                    {/* approve or deny buttons */}
                    <FlexRow>
                      <button className='border p-2 rounded-smoother'>
                        <CheckIcon />
                      </button>
                      <button className='border p-2 rounded-smoother'>
                        <CancelIcon />
                      </button>
                    </FlexRow>
                  </FlexRow>
                </ContainerFull>
              ))}
            </FlexCol>
          )}
        </ContainerFull>

        <Pagination className='p-comfy-sm' />
      </FlexCol>
    </ContainerFull>
  );
};
