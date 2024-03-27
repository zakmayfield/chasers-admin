import { Role } from '@prisma/client';
import { User } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: string;
      role: Role;
    };
  }
}

declare module 'next-auth' {
  interface User {
    role: Role;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: Role;
  }
}
