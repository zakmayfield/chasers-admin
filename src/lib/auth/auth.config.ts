import { db } from '@/lib';
import { compare } from 'bcryptjs';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import {
  getUserByUsername,
  parseSignInData,
  getUserByEmail,
  parseSignUpData,
  createUser,
  hashPassword,
  checkIfUserExists,
} from '@/utils/auth';
import type { NextAuthOptions } from 'next-auth';
import { CreateUser, Roles } from '@/shared/types';

//^ adapter
type NextAuthAdapter = NextAuthOptions['adapter'];
const adapter: NextAuthAdapter = PrismaAdapter(db);

//^ strategy
type NextAuthSessionStrategy = NextAuthOptions['session'];
const session: NextAuthSessionStrategy = {
  strategy: 'jwt',
};

//^ pages
type NextAuthPages = NextAuthOptions['pages'];
const pages: NextAuthPages = {
  signIn: '/',
  error: '/error',
};

//^ providers
type NextAuthProviders = NextAuthOptions['providers'];
const providers: NextAuthProviders = [
  CredentialsProvider({
    id: 'signin',
    name: 'Credentials',
    credentials: {
      username: {
        label: 'username',
        type: 'text',
      },
      password: { label: 'password', type: 'password' },
    },
    async authorize(credentials) {
      const formValues = {
        ...credentials,
      };

      //^ parse & retrieve form data
      const parsedFormValues = parseSignInData(formValues);
      if (!parsedFormValues) {
        return null;
      }
      const { username, password } = parsedFormValues;

      //^ fetch user via parsed data
      const user = await getUserByUsername(username);
      if (!user) {
        return null;
      }

      //^ password validation
      const passwordMatch = await compare(password, user.password);
      if (!passwordMatch) {
        return null;
      }

      return user;
    },
  }),
  CredentialsProvider({
    id: 'signup',
    name: 'Credentials',
    credentials: {
      username: { label: 'Username', type: 'text' },
      email: { label: 'Email', type: 'text' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(credentials) {
      const formValues = {
        ...credentials,
      };

      //^ parse & retrieve form data
      const parsedFormValues = parseSignUpData(formValues);
      if (!parsedFormValues) {
        throw new Error('Invalid credentials format');
      }
      const { username, email, password } = parsedFormValues;

      //^ credentials db validation
      // - is email authorized to create an account
      // - is unique username
      await checkIfUserExists({ email });

      //^ hash
      const hashedPassword = await hashPassword(password);

      //^ create user
      const userPayload: CreateUser = {
        username,
        email,
        password: hashedPassword,
        role: Roles.ADMIN,
      };

      const user = await createUser(userPayload);
      if (!user) {
        throw new Error(`There was an issue creating the user`);
      }

      return user;
    },
  }),
];

//^ callbacks
type NextAuthCallbacks = NextAuthOptions['callbacks'];
const callbacks: NextAuthCallbacks = {
  async session({ token, session }) {
    if (token) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.email = token.email;
    }

    return session;
  },

  async jwt({ token, user }) {
    const u = await getUserByEmail(token.email);

    if (!u) {
      token.id = user.id;
      token.role = user.role;
      token.email = user.email;

      return token;
    }

    return {
      id: u.id,
      role: u.role,
      email: u.email,
    };
  },

  redirect() {
    return '/dashboard';
  },
};

//^ config
export const authConfig = {
  adapter,
  session,
  pages,
  providers,
  callbacks,
} satisfies NextAuthOptions;
