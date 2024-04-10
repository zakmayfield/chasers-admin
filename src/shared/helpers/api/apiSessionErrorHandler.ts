import { Session } from 'next-auth';

const apiSessionErrorHandler = (session: Session | null) => {
  if (!session || !session.user) {
    return new Response('authentication error', { status: 401 });
  }
};

export default apiSessionErrorHandler;
