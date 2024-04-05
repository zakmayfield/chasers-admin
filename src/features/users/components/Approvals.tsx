import {
  Container,
  ContainerFull,
  ContentContainer,
  FlexCol,
  Pagination,
} from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface ApprovalsProps {
  className?: string;
}

export const Approvals: FC<ApprovalsProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <FlexCol className='h-full'>
        <h2>Users Awaiting Approval</h2>

        <ContainerFull className='border bg-chasers-tertiary h-full'>
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
