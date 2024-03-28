'use client';

import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { Button, Input, InputError } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { signInResolver } from '@/shared/validators/resolvers';
import type { SignInFormData } from '@/shared/types';

interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = ({}) => {
  const defaultValues: SignInFormData = {
    username: '',
    password: '',
  };

  const { methods, handleSubmit } = useCustomForm<SignInFormData>({
    resolver: signInResolver,
    defaultValues,

    onSubmit(formValues) {
      console.log({
        formValues,
      });
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-3'>
            <Input
              label='username'
              name='username'
              invalid={!!methods.formState.errors.username}
              props={{ placeholder: 'username', required: true }}
            />
            <InputError fieldError={methods.formState.errors.username} />
          </div>

          <div className='flex flex-col gap-3'>
            <Input
              label='password'
              name='password'
              invalid={!!methods.formState.errors.password}
              props={{
                placeholder: 'password',
                type: 'password',
                required: true,
              }}
            />
            <InputError fieldError={methods.formState.errors.password} />
          </div>

          <Button content='sign in' className='mt-3 p-2' />
        </div>
      </form>
    </FormProvider>
  );
};
