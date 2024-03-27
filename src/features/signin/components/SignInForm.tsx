'use client';
import { FC } from 'react';
import { Button, Input } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';

interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = ({}) => {
  const {} = useCustomForm({
    onSubmit() {
      console.log('submit');
    },
  });
  return (
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
  );
};
