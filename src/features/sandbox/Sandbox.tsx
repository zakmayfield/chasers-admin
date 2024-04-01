import { ContainerFull, ContainerLg, ContainerSm } from '@/shared/components';
import { FC } from 'react';

interface SandboxProps {}

export const Sandbox: FC<SandboxProps> = ({}) => {
  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <ContainerFull>
          <ContainerLg>
            <h1>testing container</h1>
            <p>body</p>
          </ContainerLg>

          <ContainerSm className='mt-6'>
            <h3>aside</h3>
            <p>body</p>
          </ContainerSm>
        </ContainerFull>
      </div>
    </div>
  );
};
