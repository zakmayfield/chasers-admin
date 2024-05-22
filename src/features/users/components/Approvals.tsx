'use client';
import {
  ContainerFull,
  ContentContainer,
  FlexCol,
  Loader,
  Pagination,
} from '@/shared/components';
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
                <ContentContainer key={user.id} className='border'>
                  <div>{user.email}</div>
                </ContentContainer>
              ))}
            </FlexCol>
          )}
        </ContainerFull>

        <Pagination className='p-comfy-sm' />
      </FlexCol>
    </ContainerFull>
  );
};
