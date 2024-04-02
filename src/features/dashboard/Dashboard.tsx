'use client';

import { FC } from 'react';
import { NewOrders, NewUsers, Overview } from './components';
import { DashboardLayout } from './components';
import { Container, ContainerFull } from '@/shared/components';

interface DashboardProps {
  email: string;
}

export const Dashboard: FC<DashboardProps> = ({ email }) => {
  return (
    <DashboardLayout>
      <Overview className='border col-span-4' />
      <NewOrders className='border col-span-2' />
      <NewUsers className='border col-span-2' />
      <ContainerFull className='border col-span-4'>
        <h2>placeholder</h2>
      </ContainerFull>
      <ContainerFull className='border col-start-3 col-span-4 h-72'>
        <h2>placeholder</h2>
      </ContainerFull>
    </DashboardLayout>
  );
};
