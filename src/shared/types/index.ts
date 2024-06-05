import { z } from 'zod';
import {
  AuthorizedAdminsValidator,
  SignInValidator,
  SignUpValidator,
} from '@/shared/validators';
import { FormEvent } from 'react';
import { DefaultValues, FieldValues, Resolver } from 'react-hook-form';
import { AuthorizedAdmin, Permission, Role, User } from '@prisma/client';
import {
  MutationFunction,
  QueryFunction,
  QueryKey,
} from '@tanstack/react-query';
import {
  CustomThemeConfig,
  KeyValuePair,
  ResolvableTo,
} from 'tailwindcss/types/config';
import { Session } from 'next-auth';

//^ Tailwind
export type TailwindKeyValue =
  | ResolvableTo<KeyValuePair<string, string>>
  | undefined;

export type PartialConfig = Partial<CustomThemeConfig> | undefined;

//^ FORM TYPES
export type SignInFormData = z.infer<typeof SignInValidator>;
export type OptionalSignInValues = {
  username?: string;
  password?: string;
};
export type SignUpFormData = z.infer<typeof SignUpValidator>;
export type AuthorizedAdminsData = z.infer<typeof AuthorizedAdminsValidator>;

export type FormValues = FieldValues;

export type FormEventType = FormEvent<HTMLFormElement>;
export type ButtonEventType = React.MouseEvent<HTMLButtonElement>;

//^ UTIL TYPES
export interface CreateUser extends SignUpFormData {
  role: Role;
}

//^ PATH TYPES
export type Path =
  | '/dashboard'
  | '/users'
  | '/orders'
  | '/admins'
  | '/auth'
  | '/sandbox';
type Key = 'dashboard' | 'users' | 'orders' | 'admins';
export type Paths = Record<Key, Path>;

//^ HELPER TYPES
// TODO: make name more descriptive
export type FetchService = {
  route: Path;
  options?: {
    urlExtension?: string;
    config?: RequestInit;
  };
};

export type ResponseData = {
  response: Response;
};
export type CompactUserData = {
  id: string | null;
  email: string | null;
};
export type ApiSessionErrorHandlerProps = {
  session: Session | null;
};
export type ApiSessionErrorHandlerData = CompactUserData;

export type ErrorResult = {
  result: Response;
};

//^ QUERIE KEYS
export enum QueryKeys {
  ALL_ADMINS = 'admins:all',
  AUTHORIZED_ADMINS = 'admins:authorized',
  USER_APPROVALS = 'users:approvals',
}

//^ HOOKS
export type UseCustomQueryProps<T> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
};

export type UseCustomMutationProps<T, V> = {
  mutationFn: MutationFunction<T, V>;
  onSuccessCallback?(data: T): void;
  onErrorCallback?(error: Error): void;
};

export type UseCustomFormProps<T extends FieldValues> = {
  onSubmit: (formValues: T) => void;
  resolver: Resolver<T>;
  defaultValues: DefaultValues<T>;
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
  SUPER = 'SUPER',
}

//^ RESPONSE / REQUEST TYPES
export type GetAuthorizedAdminsResponseData = {
  id: string;
  email: string;
}[];

export type GetAdminsResponseData = SecureUser[];

export type AuthorizeAdminRequestData = {
  email: string;
};
export type AuthorizeAdminResponseData = AuthorizedAdmin & {
  success: true;
};

export type CreateAdminRequestData = {
  email: string;
};
export type CreateAdminResponseData = SecureUser;

export type ChangePasswordRequestData = {
  previousPassword: string;
  newPassword: string;
};
export type ChangePasswordResponseData = {
  id: string;
  success: boolean;
};

export type GetUsersAwaitingApprovalResponseData = {
  approvals: { id: string; email: string }[];
};

export type UserApprovalResponseData = {
  success: boolean;
};
export type UserApprovalRequestData = {
  id: string;
};

export type UserDenyApprovalResponseData = {
  success: boolean;
};
export type UserDenyApprovalRequestData = {
  id: string;
};
