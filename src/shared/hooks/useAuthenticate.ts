import { signIn } from 'next-auth/react';
import type { FormValues } from '@/shared/types';

export const useAuthenticate = <T extends FormValues>({
  type,
}: {
  type: 'signin' | 'signup';
}) => {
  const handleAuth = async (data: T) => {
    try {
      await signIn(type, {
        ...data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const authenticate = async (formValues: T) => await handleAuth(formValues);

  return {
    authenticate,
  };
};
