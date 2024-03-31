'use client';

import { FC } from 'react';
import {
  Button,
  FormLayout,
  Input,
  InputError,
  InputLayout,
} from '@/shared/components';
import { useAuthenticate, useCustomForm } from '@/shared/hooks';
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
      authenticate(formValues);
    },
  });

  const { authenticate } = useAuthenticate<SignInFormData>({
    type: 'signin',
  });

  return (
    <div>
      <FormLayout methods={methods} handleSubmit={handleSubmit}>
        <InputLayout>
          <Input
            label='username'
            name='username'
            invalid={methods.formState.errors.username}
            props={{ placeholder: 'username', required: true }}
          />
          <InputError fieldError={methods.formState.errors.username} />
        </InputLayout>

        <InputLayout>
          <Input
            label='password'
            name='password'
            invalid={methods.formState.errors.password}
            props={{
              placeholder: 'password',
              type: 'password',
              required: true,
            }}
          />
          <InputError fieldError={methods.formState.errors.password} />
        </InputLayout>

        <Button
          content='sign in'
          className='mt-3'
          isLoading={
            methods.formState.isSubmitted &&
            methods.formState.isSubmitSuccessful
          }
        />
      </FormLayout>
    </div>
  );
};
