'use client';

import { FC } from 'react';
import { SignInForm } from './components';

interface SignInProps {}

export const SignIn: FC<SignInProps> = ({}) => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};
