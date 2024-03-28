'use client';

import { merge } from '@/utils';
import { FC } from 'react';
import { PiSpinnerGapThin } from 'react-icons/pi';

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <PiSpinnerGapThin
      className={merge(`spinner text-2xl ${className ?? ''}`)}
    />
  );
};
