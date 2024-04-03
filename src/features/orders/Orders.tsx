import { ContainerFull, PageHeader } from '@/shared/components';
import { FC } from 'react';
import { OrdersLayout } from './components';

interface OrdersProps {}

export const Orders: FC<OrdersProps> = ({}) => {
  return (
    <OrdersLayout>
      <PageHeader header='Orders' />

      <ContainerFull className='border col-span-full'>
        <h2>placeholder</h2>
      </ContainerFull>
    </OrdersLayout>
  );
};
