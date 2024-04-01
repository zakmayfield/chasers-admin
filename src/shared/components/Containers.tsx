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
      className={merge(
        `min-w-xs inline-block rounded-smoother p-comfy-sm ${className ?? ''}`
      )}
    >
      {children}
    </div>
  );
};
export const ContainerSm: FC<ContainerProps> = ({ children, className }) => {
  return (
    <Container className={merge(`max-w-md w-full block ${className ?? ''}`)}>
      {children}
    </Container>
  );
};
export const ContainerMd: FC<ContainerProps> = ({ children, className }) => {
  return (
    <Container className={merge(`max-w-xl w-full block ${className ?? ''}`)}>
      {children}
    </Container>
  );
};
export const ContainerLg: FC<ContainerProps> = ({ children, className }) => {
  return (
    <Container className={merge(`max-w-3xl w-full block ${className ?? ''}`)}>
      {children}
    </Container>
  );
};
export const ContainerFull: FC<ContainerProps> = ({ children, className }) => {
  return (
    <Container className={merge(`w-full ${className ?? ''}`)}>
      {children}
    </Container>
  );
};
