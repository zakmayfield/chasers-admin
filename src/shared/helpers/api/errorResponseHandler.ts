import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const errorResponseHandler = (error: Error | unknown, statusCode?: number) => {
  if (error instanceof Error) {
    if (error instanceof Error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // special errors
        switch (error.code) {
          case 'P2002':
            const y = {
              result: new Response('the requested record already exists', {
                status: 409,
              }),
            };
            return y;
        }
      }
      // default error
      const x = {
        result: new Response(error.message, { status: statusCode ?? 500 }),
      };
      return x;
    }
  }
  // fallback error
  const z = {
    result: new Response('unexpected server error', { status: 500 }),
  };
  return z;
};

export default errorResponseHandler;
