'use client';

import {
  ContainerFull,
  ContainerSm,
  ContainerMd,
  FlexRow,
} from '@/shared/components';
import { FC } from 'react';

interface DashboardProps {
  email: string;
}

export const Dashboard: FC<DashboardProps> = ({ email }) => {
  return (
    <ContainerFull className='border bg-chasers-primary p-comfy-lg'>
      <FlexRow className=''>
        <ContainerFull className='border'>
          <div>thing 1</div>
        </ContainerFull>
        <ContainerMd className='border'>
          <div>thing 1</div>
        </ContainerMd>
        <ContainerSm className='border'>
          <div>thing </div>
        </ContainerSm>
      </FlexRow>
    </ContainerFull>
  );
};
