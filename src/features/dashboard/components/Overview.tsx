import { FC } from 'react';
import {
  Container,
  ContainerFull,
  ContainerSm,
  FlexCol,
  FlexRow,
} from '@/shared/components';
import { merge } from '@/utils';

interface OverviewProps {
  className?: string;
}

export const Overview: FC<OverviewProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol className='h-full'>
        <h2>Overview</h2>

        <ContainerFull className='h-full bg-chasers-primary'>
          <FlexRow className='h-full'>
            <ContainerSm className='border'>data 1</ContainerSm>
            <Container className='border flex-grow'>data 2</Container>
            <Container className='border w-full h-auto'>data 2</Container>
          </FlexRow>
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
