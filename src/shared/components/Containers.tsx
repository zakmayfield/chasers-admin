'use client';

import { FC } from 'react';
import { merge } from '@/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ContainerSm: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={merge(
        `max-w-md w-full border rounded-smoother p-comfy-sm ${className ?? ''}`
      )}
    >
      {children}
    </div>
  );
};
export const ContainerMd: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={merge(
        `max-w-xl w-full border rounded-smoother p-comfy-sm ${className ?? ''}`
      )}
    >
      {children}
    </div>
  );
};
export const ContainerLg: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={merge(
        `max-w-3xl w-full border rounded-smoother p-comfy-sm ${className ?? ''}`
      )}
    >
      {children}
    </div>
  );
};
export const ContainerFull: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={merge(
        `w-full border rounded-smoother p-comfy-sm ${className ?? ''}`
      )}
    >
      {children}
    </div>
  );
};
