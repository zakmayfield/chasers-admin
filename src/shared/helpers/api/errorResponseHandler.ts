import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const errorResponseHandler = (error: Error | unknown, statusCode?: number) => {
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
      return new Response(error.message, { status: statusCode ?? 500 });
    }
  }
  // fallback errot
  return new Response('unexpected server error', { status: 500 });
};

export default errorResponseHandler;
