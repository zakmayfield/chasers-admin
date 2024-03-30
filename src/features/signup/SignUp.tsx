'use client';

import { FC } from 'react';
import { SignUpForm } from './components';

interface SignUpProps {}

export const SignUp: FC<SignUpProps> = ({}) => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};
