import { Container, ContainerFull, FlexCol } from '@/shared/components';
import { FC } from 'react';

interface WithoutVerificationProps {}

export const WithoutVerification: FC<WithoutVerificationProps> = ({}) => {
  return (
    <ContainerFull className='border col-span-3'>
      <h2>Not Verified</h2>

      <ContainerFull>
        <FlexCol>
          <Container className='border'>user 1</Container>
        </FlexCol>
      </ContainerFull>
    </ContainerFull>
  );
};
