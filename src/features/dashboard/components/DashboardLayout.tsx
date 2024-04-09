import { GridLayout } from '@/shared/components';
import { FC } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return <GridLayout gap='xl'>{children}</GridLayout>;
};
