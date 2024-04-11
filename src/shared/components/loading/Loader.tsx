'use client';

import { FC } from 'react';
import { ContainerFull } from '../Containers';
import { Spinner } from './Spinner';
import { FlexRow } from '../Flex';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <ContainerFull className='h-full'>
      <FlexRow className='h-full items-center'>
        <Spinner className={className} />
      </FlexRow>
    </ContainerFull>
  );
};
