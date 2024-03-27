'use client';

import { FC } from 'react';
import { merge } from '@/utils';

interface ButtonProps {
  content: string;
  action?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ className, action, content }) => {
  return (
    <button
      className={merge(`
        min-w-24 py-1 px-2 rounded-md border-2 
        bg-green-700 hover:bg-green-600 border-green-600 hover:border-green-700 ${
          className ?? ''
        }`)}
      onClick={() => action?.()}
    >
      {content}
    </button>
  );
};
