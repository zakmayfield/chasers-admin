import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
} from '@/shared/helpers/api';
import { validateSession } from '@/shared/helpers/session';
import {
  ApiSessionErrorHandlerData,
  CreateAdminRequestData,
  Roles,
  SecureUser,
} from '@/shared/types';
import { hashPassword } from '@/utils/auth';
import { v4 as uuidv4 } from 'uuid';

async function handler(req: Request) {
  const session = await getAuthSession();
  const sessionData = validateSession({ session });
  const body: CreateAdminRequestData = await req.json();

  return await requestHandler(sessionData, body);
}

async function requestHandler(
  sessionData: ApiSessionErrorHandlerData,
  body: CreateAdminRequestData
) {
  if (!sessionData) {
    return new Response('unauthorized', { status: 401 });
  }

  if (!body.email) {
    return new Response('invalid request: email required', { status: 400 });
  }

  try {
    const uniquePassword = uuidv4();
    const uniqueUsername = uuidv4().slice(0, 10);
    const hashedPassword = await hashPassword(uniquePassword);

    const admin: SecureUser = await db.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        username: uniqueUsername,
        role: Roles.ADMIN,
      },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        permissions: {
          select: {
            permissionId: true,
            permission: true,
          },
        },
      },
    });

    const response = successResponseHandler(admin);
    return response;
  } catch (error) {
    const errorResponse = errorResponseHandler(error);
    return errorResponse;
  }
}

export { handler as POST };
