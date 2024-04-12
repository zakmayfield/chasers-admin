import { z } from 'zod';

export const AuthorizedAdminsValidator = z
  .object({
    email: z
      .string()
      .email({ message: 'Email must be of valid format' })
      .min(3, { message: 'Email must be 3 or more characters' }),
  })
  .required();
