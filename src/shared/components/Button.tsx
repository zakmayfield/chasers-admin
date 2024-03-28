'use client';

import { FC } from 'react';
import { merge } from '@/utils';
import { Spinner } from '@/shared/components';

interface ButtonProps {
  content: string;
  action?: () => void;
  className?: string;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  action,
  content,
  isLoading,
}) => {
  return (
    <button
      aria-disabled={isLoading}
      disabled={isLoading}
      onClick={() => action?.()}
      className={merge(`
        min-w-24 p-2 h-12 text-center rounded-md border-2
        bg-chasers-green hover:bg-chasers-green-light 
        border-chasers-green-light ${className ?? ''}`)}
    >
      {isLoading ? <Spinner /> : content}
    </button>
  );
};
