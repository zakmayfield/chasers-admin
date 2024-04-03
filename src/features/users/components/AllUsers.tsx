import { Container, ContainerFull, FlexCol } from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface AllUsersProps {
  className?: string;
}

export const AllUsers: FC<AllUsersProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <h2>All Users</h2>

      <ContainerFull>
        <FlexCol>
          <Container className='border'>user 1</Container>
          <Container className='border'>user 2</Container>
          <Container className='border'>user 3</Container>
        </FlexCol>
      </ContainerFull>
    </ContainerFull>
  );
};
