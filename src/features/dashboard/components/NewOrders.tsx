import {
  Container,
  ContainerFull,
  ContentContainer,
  FlexCol,
  Pagination,
} from '@/shared/components';
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

        <ContainerFull className='border bg-chasers-tertiary h-full'>
          <FlexCol>
            <ContentContainer className='border'>order 1</ContentContainer>
            <ContentContainer className='border'>order 2</ContentContainer>
            <ContentContainer className='border'>order 3</ContentContainer>
          </FlexCol>
        </ContainerFull>

        <Pagination className='mt-auto p-0 text-right' />
      </FlexCol>
    </ContainerFull>
  );
};
