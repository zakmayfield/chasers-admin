import { zodResolver } from '@hookform/resolvers/zod';
import {
  AuthorizedAdminsValidator,
  ChangePasswordValidator,
  SignInValidator,
  SignUpValidator,
} from '@/shared/validators';

export const signInResolver = zodResolver(SignInValidator);
export const signUpResolver = zodResolver(SignUpValidator);
export const authorizedAdminsResolver = zodResolver(AuthorizedAdminsValidator);
export const changePasswordResolver = zodResolver(ChangePasswordValidator);
