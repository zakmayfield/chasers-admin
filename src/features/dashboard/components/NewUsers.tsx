import {
  Container,
  ContainerFull,
  FlexCol,
  Pagination,
} from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface NewUsersProps {
  className?: string;
}

export const NewUsers: FC<NewUsersProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol className='h-full'>
        <h2>New Users</h2>

        <ContainerFull className='border h-full bg-chasers-tertiary'>
          <FlexCol>
            <Container className='border '>user 1</Container>
            <Container className='border '>user 2</Container>
          </FlexCol>
        </ContainerFull>

        <Pagination className='mt-auto p-0' />
      </FlexCol>
    </ContainerFull>
  );
};
