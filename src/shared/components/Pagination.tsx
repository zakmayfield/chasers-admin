import { FC } from 'react';
import { ContainerFull } from '@/shared/components';
import { merge } from '@/utils';

interface PaginationProps {
  className?: string;
}

export const Pagination: FC<PaginationProps> = ({ className }) => {
  return (
    <ContainerFull
      className={merge(`border p-comfy-xs text-center ${className ?? ''}`)}
    >
      {'< - | - >'}
    </ContainerFull>
  );
};
