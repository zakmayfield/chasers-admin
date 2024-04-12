import { zodResolver } from '@hookform/resolvers/zod';
import {
  AuthorizedAdminsValidator,
  SignInValidator,
  SignUpValidator,
} from '@/shared/validators';

export const signInResolver = zodResolver(SignInValidator);
export const signUpResolver = zodResolver(SignUpValidator);
export const authorizedAdminsResolver = zodResolver(AuthorizedAdminsValidator);
