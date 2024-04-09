import { ContainerFull, FlexCol, Pagination } from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface WithoutVerificationProps {
  className?: string;
}

export const WithoutVerification: FC<WithoutVerificationProps> = ({
  className,
}) => {
  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <FlexCol className='h-full'>
        <h2>Not Verified</h2>

        <ContainerFull className='h-full bg-chasers-primary'>
          <FlexCol>
            <ContainerFull className='border'>user 1</ContainerFull>
          </FlexCol>
        </ContainerFull>

        <Pagination />
      </FlexCol>
    </ContainerFull>
  );
};
