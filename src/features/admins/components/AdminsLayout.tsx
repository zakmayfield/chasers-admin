import { GridLayout } from '@/shared/components';
import { FC } from 'react';

interface AdminsLayoutProps {
  children: React.ReactNode;
}

export const AdminsLayout: FC<AdminsLayoutProps> = ({ children }) => {
  return <GridLayout gap='xl'>{children}</GridLayout>;
};
