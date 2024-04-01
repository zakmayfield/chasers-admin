'use client';

import {
  Container,
  ContainerFull,
  ContainerSm,
  ContainerMd,
  FlexCol,
} from '@/shared/components';
import { FC } from 'react';

interface DashboardProps {
  email: string;
}

export const Dashboard: FC<DashboardProps> = ({ email }) => {
  return (
    <ContainerFull className='border bg-chasers-primary p-comfy-lg'>
      <FlexCol>
        <Container className='border'>
          <h1>hi, {email}</h1>
        </Container>

        <ContainerSm className='border'>
          <p>now what should we put here...</p>
        </ContainerSm>

        <ContainerMd className='border'>
          <FlexCol>
            <p>
              maybe{' '}
              <span className='text-gray-400'>
                user accounts to be approved
              </span>
            </p>
            <p>
              or <span className='text-gray-400'>new orders</span>
            </p>
          </FlexCol>
        </ContainerMd>
      </FlexCol>
    </ContainerFull>
  );
};
