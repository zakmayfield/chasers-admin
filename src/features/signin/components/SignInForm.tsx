'use client';

import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { Button, Input } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { signInResolver } from '@/shared/validators/resolvers';
import type { SignInFormData } from '@/shared/types';

interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = ({}) => {
  const defaultValues: SignInFormData = {
    username: '',
    password: '',
  };

  const { methods } = useCustomForm<SignInFormData>({
    resolver: signInResolver,
    defaultValues,

    onSubmit() {
      console.log('submit');
    },
  });

  return (
    <FormProvider {...methods}>
      <form className='max-w-lg p-6 mx-auto border rounded-lg'>
        <div className='flex flex-col gap-3 m-6'>
          <Input
            label='username'
            name='username'
            props={{ placeholder: 'username' }}
          />
          <Input
            label='password'
            name='password'
            props={{ placeholder: 'password', type: 'password' }}
          />
          <Button content='sign in' className='mt-6 p-2' />
        </div>
      </form>
    </FormProvider>
  );
};
