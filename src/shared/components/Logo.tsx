import { FC } from 'react';
import Image from 'next/image';
import { Container } from '@/shared/components';
import LogoSm from '../../../public/logo-sm.png';
import { merge } from '@/utils';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Container
      className={merge(`flex items-center justify-center ${className}`)}
    >
      <Image src={LogoSm} alt='Chasers Juice Logo' width={100} />
    </Container>
  );
};
