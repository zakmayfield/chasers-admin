'use client';

import { FC } from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  InputError,
  InputLayout,
} from '@/shared/components';
import { useAuthenticate, useCustomForm } from '@/shared/hooks';
import { signInResolver } from '@/shared/validators/resolvers';
import type { SignInFormData } from '@/shared/types';
import { Spinner } from '@/shared/components/loading';

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
      <Form methods={methods} handleSubmit={handleSubmit}>
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

        {methods.formState.isSubmitted &&
        methods.formState.isSubmitSuccessful ? (
          <Container className='h-14 flex items-center justify-center'>
            <Spinner />
          </Container>
        ) : (
          <Button content='sign in' />
        )}
      </Form>
    </div>
  );
};
