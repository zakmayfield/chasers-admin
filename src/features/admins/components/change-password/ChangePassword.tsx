'use client';
import {
  Button,
  Container,
  ContainerFull,
  Form,
  Input,
  InputError,
  InputLayout,
} from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { ChangePasswordRequestData } from '@/shared/types';
import { changePasswordResolver } from '@/shared/validators/resolvers';
import { merge } from '@/utils';
import { FC } from 'react';

interface ChangePasswordProps {
  className?: string;
}

export const ChangePassword: FC<ChangePasswordProps> = ({ className }) => {
  return (
    <ContainerFull className={merge(`${className ?? ''}`)}>
      <ChangePasswordForm />
    </ContainerFull>
  );
};

function ChangePasswordForm() {
  const { methods, submitHandler } = useCustomForm<ChangePasswordRequestData>({
    defaultValues: {
      password: '',
    },
    resolver: changePasswordResolver,
  });
  return (
    <Form methods={methods} handleSubmit={submitHandler}>
      <InputLayout>
        <Input
          label='change password'
          name='password'
          props={{ placeholder: 'password', required: true }}
        />
      </InputLayout>
      <InputError fieldError={methods.formState.errors.password} />

      <Button content='save' className='min-h-8' />
    </Form>
  );
}
