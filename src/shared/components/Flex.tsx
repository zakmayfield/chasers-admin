import { FC } from 'react';
import { Container } from '.';
import { merge } from '@/utils';

interface FlexProps {
  children: React.ReactNode;
  className?: string;
}

export const FlexRow: FC<FlexProps> = ({ children, className }) => {
  return (
    <div
      className={merge(`rounded-smoother flex gap-6 flex-wrap ${className}`)}
    >
      {children}
    </div>
  );
};
export const FlexCol: FC<FlexProps> = ({ children, className }) => {
  return (
    <div className={merge(`rounded-smoother flex flex-col gap-6 ${className}`)}>
      {children}
    </div>
  );
};
