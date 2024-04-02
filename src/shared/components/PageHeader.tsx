import { FC } from 'react';
import { FlexRow, Logo, Container } from '.';
import { Navbar } from '@/features';

interface PageHeaderProps {
  header: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ header }) => {
  return (
    <FlexRow className='col-span-full'>
      <Logo className='justify-center bg-chasers-primary' />

      <Container className='flex-grow flex items-center'>
        <h1 className='rounded-smoother'>{header}</h1>
      </Container>

      <Navbar className='flex-grow' underline={true} />
    </FlexRow>
  );
};
