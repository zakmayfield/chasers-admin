'use client';

import { Container, ContainerFull, ContainerSm } from '@/shared/components';
import { FC } from 'react';

interface DashboardProps {
  email: string;
}

export const Dashboard: FC<DashboardProps> = ({ email }) => {
  return (
    <ContainerFull>
      <Container className='mb-6'>
        <h1>hi, {email}</h1>
      </Container>

      <ContainerSm>
        <p>now what should we put here...</p>
      </ContainerSm>
    </ContainerFull>
  );
};
