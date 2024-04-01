import { FC } from 'react';
import { ContainerFull } from '@/shared/components';
import { merge } from '@/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const PageLayout: FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <ContainerFull
      className={merge(`min-h-screen rounded-none ${className ?? ''}`)}
    >
      {children}
    </ContainerFull>
  );
};
