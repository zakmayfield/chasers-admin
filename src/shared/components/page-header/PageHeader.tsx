import { FC } from 'react';
import { FlexRow, Logo, Container } from '..';
import { Navbar } from '@/features';
import { PageHeaderContent } from './PageHeaderContent';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return (
    <FlexRow className='col-span-full'>
      <Logo className='justify-center bg-chasers-primary' />

      <PageHeaderContent title={title} />

      <Navbar className='flex-grow' underline={true} />
    </FlexRow>
  );
};
