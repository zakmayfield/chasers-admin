import { FC } from 'react';
import { PageHeader } from '@/shared/components';
import { OrdersLayout } from './components';
import { NewOrders } from '@/features/dashboard/components';

interface OrdersProps {}

export const Orders: FC<OrdersProps> = ({}) => {
  return (
    <OrdersLayout>
      <PageHeader header='Orders' />

      <NewOrders className='border col-span-full' />
    </OrdersLayout>
  );
};
