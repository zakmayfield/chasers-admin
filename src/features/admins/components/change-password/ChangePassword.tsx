'use client';
import {
  Button,
  Container,
  ContainerFull,
  FlexCol,
  FlexRow,
  Form,
  Input,
  InputError,
  InputLayout,
  Spinner,
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
    <ContainerFull className={merge(`border ${className ?? ''}`)}>
      <FlexCol className='h-full'>
        <h2>Change Password</h2>

        <ChangePasswordForm />
      </FlexCol>
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
      methods.reset();
    },
    onErrorCallback(error) {
      console.log(`mutation:error`, { error });
      notify(`Error changing password`, 'error');
    },
  });

  return (
    <Form methods={methods} handleSubmit={submitHandler} className='w-full'>
      <FlexCol>
        <InputLayout>
          <Input
            label='password'
            name='password'
            props={{
              type: 'password',
              placeholder: 'password',
              required: true,
            }}
          />
        </InputLayout>
        <InputError fieldError={methods.formState.errors.password} />

        <ContainerFull className='p-comfy-none min-h-10 max-h-10'>
          {methods.formState.isSubmitted &&
          methods.formState.isSubmitSuccessful ? (
            <Spinner />
          ) : (
            <Button content='save' className='w-full min-h-max' />
          )}
        </ContainerFull>
      </FlexCol>
    </Form>
  );
}
