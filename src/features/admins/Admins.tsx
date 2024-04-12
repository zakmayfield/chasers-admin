import { PageHeader } from '@/shared/components';
import { FC } from 'react';
import { AdminsLayout, AllAdmins, AuthorizedAdmins } from './components';

interface AdminsProps {
  username?: string | null;
}

export const Admins: FC<AdminsProps> = ({ username }) => {
  return (
    <AdminsLayout>
      <PageHeader title='Admins' username={username} />

      <AllAdmins className='border col-span-4' />
      <AuthorizedAdmins className='border col-span-2' />
    </AdminsLayout>
  );
};
