import { FC } from 'react';
import { Container } from '.';
import { merge } from '@/utils';

interface FlexProps {
  children: React.ReactNode;
  className?: string;
}

export const FlexRow: FC<FlexProps> = ({ children }) => {
  return (
    <Container className={merge(`p-0 flex gap-6 flex-wrap ${children}`)}>
      {children}
    </Container>
  );
};
export const FlexCol: FC<FlexProps> = ({ children }) => {
  return <Container className='p-0 flex flex-col gap-6'>{children}</Container>;
};
