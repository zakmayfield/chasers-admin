import {
  Container,
  ContainerFull,
  ContentContainer,
  FlexCol,
  Pagination,
} from '@/shared/components';
import { FC } from 'react';

interface WithoutVerificationProps {}

export const WithoutVerification: FC<WithoutVerificationProps> = ({}) => {
  return (
    <ContainerFull className='border col-span-3'>
      <FlexCol className='h-full'>
        <h2>Not Verified</h2>

        <ContainerFull className='border h-full bg-chasers-tertiary'>
          <FlexCol>
            <ContentContainer className='border'>user 1</ContentContainer>
          </FlexCol>
        </ContainerFull>

        <Pagination />
      </FlexCol>
    </ContainerFull>
  );
};
