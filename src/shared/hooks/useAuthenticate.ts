import { signIn } from 'next-auth/react';
import { FormValues } from '@/shared/types';

export const useAuthenticate = <T extends FormValues>({
  type,
}: {
  type: 'sign-in' | 'sign-up';
}) => {
  const handleAuth = async (data: T) => {
    try {
      await signIn(type, {
        ...data,
      });
      console.log('sign in response');
    } catch (err) {
      console.error(err);
    }
  };

  const authenticate = async (formValues: T) => await handleAuth(formValues);

  return {
    authenticate,
  };
};