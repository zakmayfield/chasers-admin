'use client';
import {
  ContainerFull,
  ContentContainer,
  FlexCol,
  Pagination,
} from '@/shared/components';
import { useCustomQuery } from '@/shared/hooks';
import { getUsersAwaitingApproval } from '@/shared/services/queries/users';
import {
  QueryKeys,
  GetUsersAwaitingApprovalResponseData,
} from '@/shared/types';
import { merge } from '@/utils';
import { FC, useEffect } from 'react';

interface ApprovalsProps {
  className?: string;
}

export const Approvals: FC<ApprovalsProps> = ({ className }) => {
  const { data } = useCustomQuery<GetUsersAwaitingApprovalResponseData>({
    queryKey: [QueryKeys.USER_APPROVALS],
    queryFn: getUsersAwaitingApproval,
  });

  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <FlexCol className='h-full'>
        <h2>Users Awaiting Approval</h2>

        <ContainerFull className='bg-chasers-primary h-full'>
          <FlexCol>
            <ContentContainer className='border'>user 1</ContentContainer>
            <ContentContainer className='border'>user 2</ContentContainer>
          </FlexCol>
        </ContainerFull>

        <Pagination className='p-comfy-sm' />
      </FlexCol>
    </ContainerFull>
  );
};
