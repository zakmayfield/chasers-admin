'use client';

import { PageHeader } from '@/shared/components';
import { FC } from 'react';
import { AdminsLayout, AllAdmins, AuthorizedAdmins } from './components';

interface AdminsProps {}

export const Admins: FC<AdminsProps> = ({}) => {
  return (
    <AdminsLayout>
      <PageHeader header='Admins' />

      {/* <AllAdmins className='border col-span-4' /> */}
      <AuthorizedAdmins className='border col-span-3' />
    </AdminsLayout>
  );
};
