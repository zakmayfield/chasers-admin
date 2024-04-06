'use client';

import { PageHeader } from '@/shared/components';
import { FC } from 'react';
import { AdminsLayout, AllAdmins } from './components';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/shared/constants';
import { getAdmins } from '@/shared/services/queries';
import { GetAdminsData } from '@/shared/types';

interface AdminsProps {}

export const Admins: FC<AdminsProps> = ({}) => {
  const { data } = useQuery<GetAdminsData, Error>({
    queryKey: [queryKeys.admins.all],
    queryFn: getAdmins,
  });

  return (
    <AdminsLayout>
      <PageHeader header='Admins' />

      <AllAdmins className='border col-span-full' />
    </AdminsLayout>
  );
};
