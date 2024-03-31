import { AuthOptions, getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';

export const authOptions: AuthOptions = {
  ...authConfig,
};

export const getAuthSession = () => getServerSession(authOptions);
