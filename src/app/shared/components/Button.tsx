'use client';

import { FC } from 'react';

interface ButtonProps {
  content: string;
  action?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ className, action, content }) => {
  return (
    <button
      className={`min-w-24 py-1 px-2 border rounded-md ${className ?? ''}`}
      onClick={() => action?.()}
    >
      {content}
    </button>
  );
};
