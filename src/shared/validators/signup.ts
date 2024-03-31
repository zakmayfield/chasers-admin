import { z } from 'zod';

export const SignUpValidator = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Username must be 3 or more characters' }),
    email: z.string().email({ message: 'Email must be a valid format' }),
    password: z
      .string()
      .min(3, { message: 'Password must be 3 or more characters' }),
  })
  .required();
