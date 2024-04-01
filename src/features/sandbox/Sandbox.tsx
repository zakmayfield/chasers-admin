import { Container } from '@/shared/components';
import { FC } from 'react';

interface SandboxProps {}

export const Sandbox: FC<SandboxProps> = ({}) => {
  return (
    <div className='rounded-smoother'>
      <div className='border min-h-screen w-full flex items-center justify-center rounded-smoother p-comfy-lg'>
        <Container>
          <h1>testing container</h1>
          <p>body</p>
        </Container>
      </div>
    </div>
  );
};
