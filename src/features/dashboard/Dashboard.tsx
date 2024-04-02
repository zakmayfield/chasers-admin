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
        <ContainerSm className='border'>
          <div>new orders</div>
        </ContainerSm>
        <ContainerSm className='border'>
          <div>new user</div>
        </ContainerSm>
        <ContainerSm className='border'>
          <div>invoice</div>
        </ContainerSm>
      </FlexRow>
    </ContainerFull>
  );
};
