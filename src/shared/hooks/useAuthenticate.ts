import { signIn } from 'next-auth/react';
import { FormValues } from '@/shared/types';

export const useAuthenticate = <T extends FormValues>({
  type,
}: {
  type: 'signin' | 'signup';
}) => {
  const handleAuth = async (data: T) => {
    console.log('from handleAuth');
    try {
      await signIn(type, {
        ...data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const authenticate = (formValues: T) => handleAuth(formValues);

  return {
    authenticate,
  };
};
