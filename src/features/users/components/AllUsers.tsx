import {
  Container,
  ContainerFull,
  ContentContainer,
  FlexCol,
  Pagination,
} from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface AllUsersProps {
  className?: string;
}

export const AllUsers: FC<AllUsersProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol className='h-full'>
        <h2>All Users</h2>

        <ContainerFull className='border h-full bg-chasers-tertiary'>
          <FlexCol>
            <ContentContainer className='border'>user 1</ContentContainer>
            <ContentContainer className='border'>user 2</ContentContainer>
            <ContentContainer className='border'>user 3</ContentContainer>
          </FlexCol>
        </ContainerFull>

        <Pagination />
      </FlexCol>
    </ContainerFull>
  );
};
