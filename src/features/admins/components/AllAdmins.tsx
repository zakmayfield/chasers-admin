import {
  Container,
  ContainerFull,
  ContentContainer,
  FlexCol,
} from '@/shared/components';
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
            <ContentContainer className='border'>Admin 1</ContentContainer>
            <ContentContainer className='border'>Admin 2</ContentContainer>
          </FlexCol>
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
