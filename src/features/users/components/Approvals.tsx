import { Container, ContainerFull, FlexCol } from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface ApprovalsProps {
  className?: string;
}

export const Approvals: FC<ApprovalsProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <h2>Users Awaiting Approval</h2>

      <ContainerFull>
        <FlexCol>
          <Container className='border'>user 1</Container>
          <Container className='border'>user 2</Container>
        </FlexCol>
      </ContainerFull>
    </ContainerFull>
  );
};
