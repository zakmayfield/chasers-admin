'use client';
import {
  ContainerFull,
  FlexCol,
  FlexRow,
  Loader,
  Pagination,
} from '@/shared/components';
import { CancelIcon, CheckIcon } from '@/shared/components/Icons';
import { useCustomMutation, useCustomQuery } from '@/shared/hooks';
import { userApproval, userDeny } from '@/shared/services/mutations';
import { getUsersAwaitingApproval } from '@/shared/services/queries';
import {
  QueryKeys,
  GetUsersAwaitingApprovalResponseData,
  UserApprovalResponseData,
  UserApprovalRequestData,
  UserDenyApprovalResponseData,
  UserDenyApprovalRequestData,
} from '@/shared/types';
import { merge } from '@/utils';
import { FC, useState } from 'react';

interface ApprovalsProps {
  className?: string;
}

export const Approvals: FC<ApprovalsProps> = ({ className }) => {
  const { data, isLoading } =
    useCustomQuery<GetUsersAwaitingApprovalResponseData>({
      queryKey: [QueryKeys.USER_APPROVALS],
      queryFn: getUsersAwaitingApproval,
    });

  const { mutate: approveUserMutation } = useCustomMutation<
    UserApprovalResponseData,
    UserApprovalRequestData
  >({
    mutationFn: userApproval,
  });

  const { mutate: denyUserMutation } = useCustomMutation<
    UserDenyApprovalResponseData,
    UserDenyApprovalRequestData
  >({
    mutationFn: userDeny,
  });

  function handleApprove(id: string) {
    approveUserMutation({ id });
  }
  async function handleDeny(id: string) {
    denyUserMutation({ id });
  }

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
                    <FlexRow>
                      <button
                        className='border p-2 rounded-smoother'
                        onClick={() => handleApprove(user.id)}
                      >
                        <CheckIcon />
                      </button>
                      <button
                        className='border p-2 rounded-smoother'
                        onClick={() => handleDeny(user.id)}
                      >
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
