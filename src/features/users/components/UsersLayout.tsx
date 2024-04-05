import { GridLayout } from '@/shared/components';
import { FC } from 'react';

interface UsersLayoutProps {
  children: React.ReactNode;
}

export const UsersLayout: FC<UsersLayoutProps> = ({ children }) => {
  return <GridLayout gap='xl'>{children}</GridLayout>;
};
