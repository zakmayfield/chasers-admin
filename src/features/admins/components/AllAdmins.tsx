import { Container, ContainerFull, FlexCol } from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface AllAdminsProps {
  className?: string;
}

export const AllAdmins: FC<AllAdminsProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <FlexCol className='h-full'>
        <h2>All Admins</h2>

        <ContainerFull className='border h-full bg-chasers-tertiary'>
          <FlexCol>
            <Container className='border'>Admin 1</Container>
            <Container className='border'>Admin 2</Container>
          </FlexCol>
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
