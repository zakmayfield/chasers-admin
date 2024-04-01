import { ContainerFull, ContainerLg, FlexCol } from '@/shared/components';
import { FC } from 'react';

interface OverviewProps {}

export const Overview: FC<OverviewProps> = ({}) => {
  return (
    <ContainerFull className='border'>
      <FlexCol>
        <h1>Overview</h1>

        <ContainerFull className='text-gray-900 border bg-chasers-tertiary'>
          <FlexCol>
            <ContainerLg>data 1</ContainerLg>
            <ContainerLg>data 2</ContainerLg>
          </FlexCol>
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
