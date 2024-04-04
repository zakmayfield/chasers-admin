import { ContainerFull, PageHeader } from '@/shared/components';
import { FC } from 'react';
import { AdminsLayout } from './components';

interface AdminsProps {}

export const Admins: FC<AdminsProps> = ({}) => {
  return (
    <AdminsLayout>
      <PageHeader header='Admins' />

      <ContainerFull className='border col-span-full'>
        <h2>placeholder</h2>
      </ContainerFull>
    </AdminsLayout>
  );
};
