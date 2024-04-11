'use client';

import { FC } from 'react';
import { merge } from '@/utils';
import { ContainerFull } from '../Containers';
import { Spinner } from './Spinner';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`spinner text-2xl ${className ?? ''}`)}>
      <Spinner />
    </ContainerFull>
  );
};
