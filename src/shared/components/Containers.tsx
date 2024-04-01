'use client';

import { FC } from 'react';
import { merge } from '@/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={merge(`border rounded-smoother p-comfy-sm ${className ?? ''}`)}
    >
      {children}
    </div>
  );
};
