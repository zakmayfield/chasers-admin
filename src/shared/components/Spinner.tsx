'use client';

import { FC } from 'react';
import { merge } from '@/utils';
import { SpinnerIcon } from '@/shared/components/Icons';

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <SpinnerIcon className={merge(`spinner text-2xl ${className ?? ''}`)} />
  );
};
