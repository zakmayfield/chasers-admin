'use client';

import { FC } from 'react';
import { NewOrders, NewUsers, Overview } from './components';
import { DashboardLayout } from './components';
import { ContainerFull, PageHeader } from '@/shared/components';

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <DashboardLayout>
      <PageHeader header='Dashboard' />

      <Overview className='border col-span-4' />
      <NewOrders className='border col-span-2' />
      <NewUsers className='border col-span-2' />

      <ContainerFull className='border col-span-4'>
        <h2>placeholder</h2>
      </ContainerFull>
    </DashboardLayout>
  );
};
