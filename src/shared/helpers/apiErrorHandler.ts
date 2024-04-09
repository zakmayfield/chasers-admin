import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const apiErrorHandler = (error: Error | unknown) => {
  if (error instanceof Error) {
    if (error instanceof Error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // special errors
        switch (error.code) {
          case 'P2002':
            return new Response('the requested record already exists', {
              status: 409,
            });
        }
      }
      // default error
      return new Response(error.message, { status: 500 });
    }
  }
  // fallback error
  return new Response('unexpected server error', { status: 500 });
};
