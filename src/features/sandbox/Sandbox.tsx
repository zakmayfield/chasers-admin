import {
  Container,
  ContainerFull,
  ContainerLg,
  ContainerMd,
  ContainerSm,
} from '@/shared/components';
import { FC } from 'react';

interface SandboxProps {}

export const Sandbox: FC<SandboxProps> = ({}) => {
  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <ContainerFull className='flex flex-col gap-6'>
          <ContainerSm>
            <h3>ContainerSm</h3>
          </ContainerSm>
          <ContainerMd>
            <h3>ContainerMd</h3>
          </ContainerMd>
          <ContainerLg>
            <h3>ContainerLg</h3>
          </ContainerLg>
          <ContainerFull>
            <h3>ContainerFull</h3>
          </ContainerFull>
        </ContainerFull>
      </div>
    </div>
  );
};
