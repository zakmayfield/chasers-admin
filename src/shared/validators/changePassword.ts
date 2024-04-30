import { z } from 'zod';

export const ChangePasswordValidator = z
  .object({
    password: z
      .string()
      .min(3, { message: 'password must be 3 or more characters' }),
  })
  .required();
