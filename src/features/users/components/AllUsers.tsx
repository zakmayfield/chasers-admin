'use client';

import { ContainerFull, FlexCol, Pagination } from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface AllUsersProps {
  className?: string;
}

export const AllUsers: FC<AllUsersProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol className='h-full'>
        <h2>All Users</h2>

        <ContainerFull className='h-full bg-chasers-primary'>
          <FlexCol>
            <ContainerFull className='border'>user 1</ContainerFull>
            <ContainerFull className='border'>user 2</ContainerFull>
            <ContainerFull className='border'>user 3</ContainerFull>
          </FlexCol>
        </ContainerFull>

        <Pagination />
      </FlexCol>
    </ContainerFull>
  );
};
