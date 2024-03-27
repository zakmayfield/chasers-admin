'use client';

import { FC } from 'react';
import { SignInForm } from './components';

interface SignInProps {}

export const SignIn: FC<SignInProps> = ({}) => {
  return (
    <div>
      <h1>Sign In</h1>

      <div>
        <SignInForm />
      </div>
    </div>
  );
};
