import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import {
  errorResponseHandler,
  successResponseHandler,
} from '@/shared/helpers/api';
import { validateSession } from '@/shared/helpers/session';
import {
  ChangePasswordRequestData,
  ChangePasswordResponseData,
  CompactUserData,
} from '@/shared/types';
import { hashPassword } from '@/utils/auth';
import { compare } from 'bcryptjs';

async function handler(req: Request) {
  const session = await getAuthSession();
  const sessionData = validateSession({ session });
  const body: ChangePasswordRequestData = await req.json();

  return await handleRequest(sessionData, body);
}

async function handleRequest(
  sessionData: CompactUserData,
  body: ChangePasswordRequestData
) {
  if (!sessionData) {
    return new Response('unauthorized', { status: 401 });
  }
  if (!body.newPassword || !body.previousPassword) {
    return new Response('invalid request: password required', { status: 401 });
  }
  const { id } = sessionData;
  const { newPassword, previousPassword } = body;

  try {
    const admin = await db.user.findUniqueOrThrow({
      where: {
        id: id!,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const isValidPassword = await compare(previousPassword, admin.password);
    if (!isValidPassword) {
      return new Response('unauthorized: previous password is invalid', {
        status: 401,
      });
    }

    const hashedPassword = await hashPassword(newPassword);

    await db.user.update({
      where: { id: id! },
      data: { password: hashedPassword },
    });

    const response: ChangePasswordResponseData = {
      id: admin.id,
      success: true,
    };

    console.log({
      isValidPassword,
      hashedPassword,
      admin,
    });

    return successResponseHandler(response);
  } catch (error) {
    const errorResponse = errorResponseHandler(error);
    return errorResponse;
  }
}

export { handler as PUT };
