'use client';

import { Container, FlexRow, StyledLink } from '@/shared/components';
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
          <StyledLink path='/dashboard' content='dashboard' />
          <StyledLink path='/orders' content='orders' />
          <StyledLink path='/users' content='users' />
          <StyledLink path='/admins' content='admins' />
          <StyledLink path='#' content='logout' />
        </FlexRow>
      </nav>
    </Container>
  );
};
