import { FC } from 'react';
import {
  AllUsers,
  Approvals,
  UsersLayout,
  WithoutVerification,
} from './components';
import { PageHeader } from '@/shared/components';

interface UsersProps {}

export const Users: FC<UsersProps> = ({}) => {
  return (
    <UsersLayout>
      <PageHeader header='User Management' />

      <Approvals className='border col-span-full' />
      <AllUsers className='border col-span-3' />
      <WithoutVerification />
    </UsersLayout>
  );
};
