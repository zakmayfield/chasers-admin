import { z } from 'zod';
import { SignInValidator, SignUpValidator } from '@/shared/validators';
import { FormEvent } from 'react';
import { FieldValues } from 'react-hook-form';
import { Role } from '@prisma/client';

export type SignInFormData = z.infer<typeof SignInValidator>;
export type OptionalSignInValues = {
  username?: string;
  password?: string;
};
export type SignUpFormData = z.infer<typeof SignUpValidator>;

export type FormValues = FieldValues;

export type FormEventType = FormEvent<HTMLFormElement>;
export type ButtonEventType = React.MouseEvent<HTMLButtonElement>;

export interface CreateUser extends SignUpFormData {
  role: Role;
}

export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
