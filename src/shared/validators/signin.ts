import { z } from 'zod';

export const SignInValidator = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Username must be 3 or more characters' }),
    password: z
      .string()
      .min(3, { message: 'Password must be 3 or more characters' }),
  })
  .required();
