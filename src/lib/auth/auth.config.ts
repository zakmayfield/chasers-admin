import { db } from '@/lib';
import { compare } from 'bcryptjs';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByUsername, parseSignInData } from '@/utils/auth';
import type { NextAuthOptions } from 'next-auth';

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
    id: 'sign-in',
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
    id: 'sign-up',
    name: 'Credentials',
    credentials: {
      email: { label: 'Email', type: 'text' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(credentials) {
      console.log({
        credentials,
      });

      const user = null;

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
    }

    return session;
  },

  async jwt({ token, user }) {
    // get user by email
    const u = await db.user.findUnique({ where: { email: user.email! } });

    if (!u) {
      token.id = user!.id;
      return token;
    }

    return {
      id: u.id,
      role: u.role,
    };
  },

  redirect() {
    return '/';
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
