'use client';

import {
  Container,
  ContainerFull,
  FlexCol,
  FlexRow,
  StyledLink,
} from '@/shared/components';
import { merge } from '@/utils';
import { FC } from 'react';

interface NavbarProps {
  className?: string;
  underline?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ className, underline }) => {
  return (
    <Container className={merge(`flex items-center ${className ?? ''}`)}>
      <nav className={`w-full ${underline && 'underline'}`}>
        <FlexRow className='justify-end'>
          <StyledLink path='#' content='users' />
          <StyledLink path='#' content='orders' />
          <StyledLink path='#' content='logout' />
        </FlexRow>
      </nav>
    </Container>
  );
};
