import { FC } from 'react';
import { ContainerFull } from '@/shared/components';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <ContainerFull className='min-h-screen'>
      <div>{children}</div>
    </ContainerFull>
  );
};
