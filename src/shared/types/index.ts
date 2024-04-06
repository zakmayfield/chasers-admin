import { z } from 'zod';
import { SignInValidator, SignUpValidator } from '@/shared/validators';
import { FormEvent } from 'react';
import { FieldValues } from 'react-hook-form';
import { Role } from '@prisma/client';
import { UseMutateFunction } from '@tanstack/react-query';

//^ FORMS
export type SignInFormData = z.infer<typeof SignInValidator>;
export type OptionalSignInValues = {
  username?: string;
  password?: string;
};
export type SignUpFormData = z.infer<typeof SignUpValidator>;

export type FormValues = FieldValues;

export type FormEventType = FormEvent<HTMLFormElement>;
export type ButtonEventType = React.MouseEvent<HTMLButtonElement>;

//^ AUTH
export interface CreateUser extends SignUpFormData {
  role: Role;
}

//^ ROLES
export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

//^ PATHS
export type Path = '/dashboard' | '/users' | '/orders' | '/admins';
type Key = 'dashboard' | 'users' | 'orders' | 'admins';
export type Paths = Record<Key, Path>;

//^ MUTATIONS
export type MutateFunction<T> = UseMutateFunction<T, Error, void, unknown>;
