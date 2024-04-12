import { FC } from 'react';
import { Container } from '../Containers';

interface PageHeaderContentProps {
  title: string;
}

export const PageHeaderContent: FC<PageHeaderContentProps> = ({ title }) => {
  return (
    <Container className='flex-grow flex items-center'>
      <h1 className='rounded-smoother'>{title}</h1>
    </Container>
  );
};
