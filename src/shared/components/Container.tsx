'use client';

import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
