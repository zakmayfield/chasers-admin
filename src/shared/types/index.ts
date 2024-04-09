import { z } from 'zod';
import { SignInValidator, SignUpValidator } from '@/shared/validators';
import { FormEvent } from 'react';
import { FieldValues } from 'react-hook-form';
import { Permission, Role } from '@prisma/client';
import {
  QueryFunction,
  QueryKey,
  UseMutateFunction,
} from '@tanstack/react-query';

//^ FORM TYPES
export type SignInFormData = z.infer<typeof SignInValidator>;
export type OptionalSignInValues = {
  username?: string;
  password?: string;
};
export type SignUpFormData = z.infer<typeof SignUpValidator>;

export type FormValues = FieldValues;

export type FormEventType = FormEvent<HTMLFormElement>;
export type ButtonEventType = React.MouseEvent<HTMLButtonElement>;

//^ UTIL TYPES
export interface CreateUser extends SignUpFormData {
  role: Role;
}

//^ PATH TYPES
export type Path = '/dashboard' | '/users' | '/orders' | '/admins';
type Key = 'dashboard' | 'users' | 'orders' | 'admins';
export type Paths = Record<Key, Path>;

//^ HELPER TYPES
export type FetchService = {
  path: Path;
  options?: {
    urlExtension?: string;
    config?: RequestInit;
  };
};

//^ QUERIES / MUTATIONS
export enum QueryKeys {
  ALL_ADMINS = 'admins:all',
  AUTHORIZED_ADMINS = 'admins:authorized',
}

export type UseCustomQueryProps<T> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
};

//^ DATA TYPES
export type SecureUser = {
  id: string;
  email: string;
  username: string | null;
  role: Role;
  permissions: {
    permissionId: string;
    permission: Permission;
  }[];
};

export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type GetAuthorizedAdminsResponseData = {
  id: string;
  email: string;
}[];

export type GetAdminsResponseData = SecureUser[];
