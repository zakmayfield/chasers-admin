import { z } from 'zod';
import { SignInValidator, SignUpValidator } from '@/shared/validators';

export type SignInForm = z.infer<typeof SignInValidator>;
export type SignUpForm = z.infer<typeof SignUpValidator>;
