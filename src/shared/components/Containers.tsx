'use client';

import { FC } from 'react';
import { merge } from '@/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// TODO: `Container` should utilize `max-w-max` for retaining size of content
// should use `ContainerFull` for a full width container regardless of content
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
export const ContentContainer: FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={merge(
        `min-w-xs max-w-max inline-block rounded-smoother p-comfy-sm ${
          className ?? ''
        }`
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
    <Container className={merge(`w-full block ${className ?? ''}`)}>
      {children}
    </Container>
  );
};
