import { ContainerFull, PageHeader } from '@/shared/components';
import { FC } from 'react';
import { AdminsLayout, AllAdmins } from './components';

interface AdminsProps {}

export const Admins: FC<AdminsProps> = ({}) => {
  return (
    <AdminsLayout>
      <PageHeader header='Admins' />

      <AllAdmins className='border col-span-full' />
    </AdminsLayout>
  );
};
