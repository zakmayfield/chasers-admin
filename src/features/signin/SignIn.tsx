'use client';

import { useCustomForm } from '@/shared/hooks';
import { FC } from 'react';

interface SignInProps {}

export const SignIn: FC<SignInProps> = ({}) => {
  const {} = useCustomForm({});
  return <div>SignIn</div>;
};
