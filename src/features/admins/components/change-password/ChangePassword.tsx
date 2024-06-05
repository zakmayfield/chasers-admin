'use client';
import {
  Button,
  ContainerFull,
  FlexCol,
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
  const { methods, submitHandler, handleReset } =
    useCustomForm<ChangePasswordRequestData>({
      defaultValues: {
        previousPassword: '',
        newPassword: '',
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
      handleReset();
    },
    onErrorCallback(error) {
      console.log(`mutation:error`, { error });
      notify(error.message, 'error');
      handleReset();
    },
  });

  return (
    <Form methods={methods} handleSubmit={submitHandler} className='w-full'>
      <FlexCol>
        <InputLayout>
          <Input
            label='previous password'
            name='previousPassword'
            props={{
              type: 'password',
              placeholder: 'previous password',
              required: true,
            }}
          />
        </InputLayout>
        <InputError fieldError={methods.formState.errors.previousPassword} />

        <InputLayout>
          <Input
            label='password'
            name='newPassword'
            props={{
              type: 'password',
              placeholder: 'password',
              required: true,
            }}
          />
        </InputLayout>
        <InputError fieldError={methods.formState.errors.newPassword} />

        {methods.formState.isSubmitted &&
        methods.formState.isSubmitSuccessful ? (
          <Spinner />
        ) : (
          <Button content='save' className='w-full min-h-max' />
        )}
      </FlexCol>
    </Form>
  );
}
