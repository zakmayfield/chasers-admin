import { Role } from '@prisma/client';
import { User } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: string;
      role: Role;
      email?: string;
    };
  }
}

declare module 'next-auth' {
  interface User {
    id: string;
    role: Role;
    email?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: Role;
    email?: string;
  }
}
