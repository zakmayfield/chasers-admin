import { Container, ContainerFull, FlexCol } from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface NewUsersProps {
  className?: string;
}

export const NewUsers: FC<NewUsersProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol>
        <h2>New Users</h2>

        <ContainerFull className='border bg-chasers-tertiary'>
          <Container className='border '>user 1</Container>
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
