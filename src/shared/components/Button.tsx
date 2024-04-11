'use client';

import { FC } from 'react';
import { merge } from '@/utils';
import { Spinner } from '@/shared/components/loading';

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
  const handleClick = () => {
    action?.();
  };

  return (
    <button
      aria-disabled={isLoading}
      disabled={isLoading}
      onClick={handleClick}
      className={merge(`
        min-w-24 p-2 min-h-14 text-center rounded-md border-2
        bg-chasers-green hover:bg-chasers-green-light 
        border-chasers-green-light ${className ?? ''}`)}
    >
      {isLoading ? <Spinner /> : content}
    </button>
  );
};
