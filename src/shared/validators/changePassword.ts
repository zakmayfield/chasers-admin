import { z } from 'zod';

export const ChangePasswordValidator = z
  .object({
    previousPassword: z
      .string()
      .min(3, { message: 'previous password must be 3 or more characters' }),
    newPassword: z
      .string()
      .min(3, { message: 'password must be 3 or more characters' }),
  })
  .required();
