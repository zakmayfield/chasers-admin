import { FC } from 'react';
import { useAuthenticate, useCustomForm } from '@/shared/hooks';
import { SignUpFormData } from '@/shared/types';
import { signUpResolver } from '@/shared/validators/resolvers';
import { FormLayout } from '@/shared/components';

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
    type: 'sign-up',
  });

  return (
    <FormLayout methods={methods} handleSubmit={handleSubmit}>
      <div></div>
    </FormLayout>
  );
};
