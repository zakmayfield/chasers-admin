'use client';

import { FC } from 'react';
import { useAuthenticate, useCustomForm } from '@/shared/hooks';
import { SignUpFormData } from '@/shared/types';
import { signUpResolver } from '@/shared/validators/resolvers';
import {
  Button,
  Container,
  Form,
  Input,
  InputError,
  InputLayout,
  Spinner,
} from '@/shared/components';

interface SignUpFormProps {}

export const SignUpForm: FC<SignUpFormProps> = ({}) => {
  const defaultValues: SignUpFormData = {
    username: '',
    email: '',
    password: '',
  };
  const { methods, handleSubmit } = useCustomForm<SignUpFormData>({
    resolver: signUpResolver,
    defaultValues,

    onSubmit(formValues) {
      authenticate(formValues);
    },
  });

  const { authenticate } = useAuthenticate<SignUpFormData>({
    type: 'signup',
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
            label='email'
            name='email'
            invalid={methods.formState.errors.email}
            props={{ placeholder: 'email', required: true }}
          />
          <InputError fieldError={methods.formState.errors.email} />
        </InputLayout>

        <InputLayout>
          <Input
            label='password'
            name='password'
            invalid={methods.formState.errors.password}
            props={{
              placeholder: 'password',
              required: true,
              type: 'password',
            }}
          />
          <InputError fieldError={methods.formState.errors.password} />
        </InputLayout>

        {methods.formState.isSubmitted &&
        methods.formState.isSubmitSuccessful ? (
          <Container className='h-12 flex items-center justify-center'>
            <Spinner className='text-3xl' />
          </Container>
        ) : (
          <Button content='sign in' />
        )}
      </Form>
    </div>
  );
};
