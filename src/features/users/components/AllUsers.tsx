import {
  Container,
  ContainerFull,
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
            <Container className='border'>user 1</Container>
            <Container className='border'>user 2</Container>
            <Container className='border'>user 3</Container>
          </FlexCol>
        </ContainerFull>

        <Pagination />
      </FlexCol>
    </ContainerFull>
  );
};
