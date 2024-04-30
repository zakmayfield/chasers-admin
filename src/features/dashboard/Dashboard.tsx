'use client';

import { FC } from 'react';
import { NewOrders, NewUsers, Overview } from './components';
import { DashboardLayout } from './components';
import { PageHeader } from '@/shared/components';
import { ChangePassword } from '../admins/components';

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <DashboardLayout>
      <PageHeader header='Dashboard' />
      <Overview className='border col-span-4' />
      <NewOrders className='border col-span-2' />
      <NewUsers className='border col-span-4' />
      <ChangePassword className='col-start-5 col-span-2' />
    </DashboardLayout>
  );
};
