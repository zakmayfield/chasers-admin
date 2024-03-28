import { db } from '@/lib';
import { OptionalSignInValues } from '@/shared/types';
import { SignInValidator } from '@/shared/validators';

export const getUserByUsername = async (username: string) => {
  try {
    const userRecord = await db.user.findUnique({
      where: { username },
    });

    return userRecord;
  } catch (error) {
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const userRecord = await db.user.findUnique({
      where: { email },
    });

    return userRecord;
  } catch (error) {
    return null;
  }
};

export const parseSignInData = (formValues: OptionalSignInValues) => {
  const parsed = SignInValidator.safeParse(formValues);

  if (!parsed.success) {
    // throw new Error(parsed.error.message);
    return null;
  }

  const {
    data: { username, password },
  } = parsed;

  return {
    username,
    password,
  };
};
