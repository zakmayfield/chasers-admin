import { z } from 'zod';
import { SignInValidator, SignUpValidator } from '@/shared/validators';

export type SignInFormData = z.infer<typeof SignInValidator>;
export type OptionalSignInValues = {
  username?: string;
  password?: string;
};
export type SignUpFormData = z.infer<typeof SignUpValidator>;

export type FormValues = {
  [key: string]: string;
};
