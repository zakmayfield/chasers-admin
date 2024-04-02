'use client';

import { FC } from 'react';
import { NewOrders, NewUsers, Overview } from './components';
import { DashboardLayout } from './components';
import { Container } from '@/shared/components';

interface DashboardProps {
  email: string;
}

export const Dashboard: FC<DashboardProps> = ({ email }) => {
  return (
    <DashboardLayout>
      <Overview className='border col-span-4' />
      <NewOrders className='border col-span-2 row-span-2' />
      <NewUsers className='border col-span-2' />
    </DashboardLayout>
  );
};
