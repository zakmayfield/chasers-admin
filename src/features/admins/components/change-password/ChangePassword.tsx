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
import { useCustomForm, useCustomMutation, useToast } from '@/shared/hooks';
import { changePassword } from '@/shared/services/mutations';
import {
  ChangePasswordRequestData,
  ChangePasswordResponseData,
} from '@/shared/types';
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
  const { notify } = useToast();
  const { methods, submitHandler } = useCustomForm<ChangePasswordRequestData>({
    defaultValues: {
      password: '',
    },
    resolver: changePasswordResolver,
    action(data) {
      mutate(data);
    },
  });

  const { mutate } = useCustomMutation<
    ChangePasswordResponseData,
    ChangePasswordRequestData
  >({
    mutationFn: changePassword,
    onSuccessCallback(data) {
      notify('Successfully changed password');
    },
    onErrorCallback(error) {
      console.log(`mutation:error`, { error });
      notify(`Error changing password`, 'error');
    },
  });

  return (
    <Form methods={methods} handleSubmit={submitHandler}>
      <InputLayout>
        <Input
          label='change password'
          name='password'
          props={{ type: 'password', placeholder: 'password', required: true }}
        />
      </InputLayout>
      <InputError fieldError={methods.formState.errors.password} />

      <Button content='save' className='min-h-8' />
    </Form>
  );
}
