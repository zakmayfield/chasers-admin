import { FC } from 'react';
import { Input } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';

interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = ({}) => {
  const {} = useCustomForm({
    onSubmit() {
      console.log('submit');
    },
  });
  return (
    <form>
      <Input
        label='username'
        name='username'
        props={{ placeholder: 'username' }}
      />
    </form>
  );
};
