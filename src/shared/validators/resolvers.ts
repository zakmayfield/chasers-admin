import { zodResolver } from '@hookform/resolvers/zod';
import { SignInValidator, SignUpValidator } from '@/shared/validators';

export const signInResolver = zodResolver(SignInValidator);
export const signUpResolver = zodResolver(SignUpValidator);
