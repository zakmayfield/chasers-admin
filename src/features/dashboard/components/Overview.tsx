import { FC } from 'react';
import {
  Container,
  ContainerFull,
  ContainerLg,
  FlexCol,
} from '@/shared/components';
import { merge } from '@/utils';

interface OverviewProps {
  className?: string;
}

export const Overview: FC<OverviewProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol>
        <h2>Overview</h2>

        <ContainerFull className='text-gray-900 border bg-chasers-tertiary'>
          <FlexCol>
            <Container className='border'>data 1</Container>
            <Container className='border'>data 2</Container>
          </FlexCol>
        </ContainerFull>
      </FlexCol>
    </ContainerFull>
  );
};
