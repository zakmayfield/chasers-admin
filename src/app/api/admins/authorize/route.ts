import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import { authorizeAdmin } from '@/shared/services/mutations';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
} from '@/shared/types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

async function handler(req: Request) {
  const session = await getAuthSession();
  if (!session || !session.user) {
    return new Response('authentication error', { status: 401 });
  }

  const body: AuthorizeAdminRequestData = await req.json();
  const { email } = body;

  if (!email) {
    return new Response('a valid email is required to make this request', {
      status: 400,
    });
  }

  try {
    const authorizedAdminRecord = await db.authorizedAdmin.create({
      data: {
        email,
      },
    });

    const response: AuthorizeAdminResponseData = {
      ...authorizedAdminRecord,
      success: true,
    };

    return new Response(JSON.stringify(response));
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        if (error instanceof PrismaClientKnownRequestError) {
          // special errors
          switch (error.code) {
            case 'P2002':
              return new Response('the requested email already exists', {
                status: 409,
              });
          }
        }
        // default error
        return new Response(error.message, { status: 500 });
      }
      // fallback error
      return new Response('unexpected server error', { status: 500 });
    }
  }
}

export { handler as POST };
