import { FC } from 'react';
import { UsersLayout } from './components';
import { PageHeader } from '@/shared/components';

interface UsersProps {}

export const Users: FC<UsersProps> = ({}) => {
  return (
    <UsersLayout>
      <PageHeader header='User Management' />
    </UsersLayout>
  );
};
