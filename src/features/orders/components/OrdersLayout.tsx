import { ContainerFull, GridLayout } from '@/shared/components';
import { FC } from 'react';

interface OrdersLayoutProps {
  children: React.ReactNode;
}

export const OrdersLayout: FC<OrdersLayoutProps> = ({ children }) => {
  return <GridLayout gap='xl'>{children}</GridLayout>;
};
