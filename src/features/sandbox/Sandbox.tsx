import { StyledLink } from '@/shared/components';
import { FC } from 'react';

interface SandboxProps {}

export const Sandbox: FC<SandboxProps> = ({}) => {
  return (
    <div>
      <h1 className='mb-6'>Components</h1>

      <nav className='flex gap-3'>
        <StyledLink path='/sandbox/container' content='container' />
        <StyledLink path='/sandbox/grid' content='grid' />
        <StyledLink path='/sandbox/change-password' content='change password' />
      </nav>
    </div>
  );
};
