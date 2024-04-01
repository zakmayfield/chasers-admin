import {
  Container,
  ContainerFull,
  ContainerLg,
  ContainerMd,
  ContainerSm,
  FlexCol,
  FlexRow,
} from '@/shared/components';
import { FC } from 'react';

interface SandboxProps {}

export const Sandbox: FC<SandboxProps> = ({}) => {
  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <ContainerFull>
          <FlexRow>
            <Container>
              <h3>
                Container <span className='text-slate-300'>(auto)</span>
              </h3>
            </Container>
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
          </FlexRow>
        </ContainerFull>
      </div>
    </div>
  );
};
