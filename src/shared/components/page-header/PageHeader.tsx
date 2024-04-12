import { FC } from 'react';
import { FlexRow, Logo } from '..';
import { Navbar } from '@/features';
import { PageHeaderContent } from './PageHeaderContent';

interface PageHeaderProps {
  title: string;
  username?: string | null;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, username }) => {
  return (
    <FlexRow className='col-span-full'>
      <Logo className='justify-center bg-chasers-primary' />

      <PageHeaderContent title={title} username={username} />

      <Navbar className='flex-grow' underline={true} />
    </FlexRow>
  );
};
