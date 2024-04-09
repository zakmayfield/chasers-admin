import { Session } from 'next-auth';

export const apiSessionErrorHandler = async (session: Session | null) => {
  if (!session || !session.user) {
    return new Response('authentication error', { status: 401 });
  }
};
