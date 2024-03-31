import { db } from '@/lib';
import { CreateUser, OptionalSignInValues } from '@/shared/types';
import { SignInValidator, SignUpValidator } from '@/shared/validators';
import { genSalt, hash } from 'bcryptjs';

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

export const getUserByEmail = async (email?: string) => {
  try {
    const userRecord = await db.user.findUnique({
      where: { email },
    });

    return userRecord;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const userRecord = await db.user.findUnique({
      where: { id },
    });

    return userRecord;
  } catch (error) {
    return null;
  }
};

export const parseSignInData = (formValues: OptionalSignInValues) => {
  const parsed = SignInValidator.safeParse(formValues);

  if (!parsed.success) {
    throw new Error('Invalid credentials format');
  }

  const {
    data: { username, password },
  } = parsed;

  return {
    username,
    password,
  };
};

export const parseSignUpData = (formValues: OptionalSignInValues) => {
  const parsed = SignUpValidator.safeParse(formValues);

  if (!parsed.success) {
    throw new Error('Invalid credentials format');
  }

  const {
    data: { username, email, password },
  } = parsed;

  return {
    username,
    email,
    password,
  };
};

export const createUser = async (userPayload: CreateUser) => {
  try {
    const user = await db.user.create({
      data: {
        username: userPayload.username,
        email: userPayload.email,
        password: userPayload.password,
        role: userPayload.role,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const checkIfUserExists = async (where: { email: string }) => {
  const existingUser = await db.user.findUnique({
    where,
    select: { id: true },
  });

  if (existingUser) {
    throw Error('Seems like this user already exists');
  }
};

export const hashPassword = async (password: string) => {
  const salt = await genSalt(12);
  const hashedPassword = await hash(password, salt);

  return hashedPassword;
};
