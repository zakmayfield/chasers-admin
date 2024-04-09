import { ContainerFull, FlexCol, Pagination } from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface NewOrdersProps {
  className?: string;
}

export const NewOrders: FC<NewOrdersProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol className='h-full'>
        <h2>New Orders</h2>

        <ContainerFull className='bg-chasers-primary h-full'>
          <FlexCol>
            <ContainerFull className='border'>order 1</ContainerFull>
            <ContainerFull className='border'>order 2</ContainerFull>
            <ContainerFull className='border'>order 3</ContainerFull>
          </FlexCol>
        </ContainerFull>

        <Pagination className='mt-auto p-0 text-right' />
      </FlexCol>
    </ContainerFull>
  );
};
