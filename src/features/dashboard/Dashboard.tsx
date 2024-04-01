'use client';

import {
  ContainerFull,
  ContainerSm,
  ContainerMd,
  FlexRow,
} from '@/shared/components';
import { FC } from 'react';
import { Overview } from './components';

interface DashboardProps {
  email: string;
}

export const Dashboard: FC<DashboardProps> = ({ email }) => {
  return (
    <ContainerFull className='border bg-chasers-primary p-comfy-lg'>
      <FlexRow className=''>
        <Overview />
        <ContainerMd className='border'>
          <div>thing 1</div>
        </ContainerMd>
        <ContainerSm className='border'>
          <div>thing 2</div>
        </ContainerSm>
      </FlexRow>
    </ContainerFull>
  );
};
