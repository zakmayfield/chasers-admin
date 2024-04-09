import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import { authorizePermissions } from '@/shared/helpers';

async function handler() {
  const session = await getAuthSession();
  if (!session || !session.user) {
    return new Response('authentication error', { status: 401 });
  }

  try {
    const authorizePermissionsResponse = await authorizePermissions(
      session.user.id,
      ['admin:super']
    );
    if (authorizePermissionsResponse) {
      return authorizePermissionsResponse;
    }

    const authorizedAdmins = await db.authorizedAdmin.findMany();
    return new Response(JSON.stringify(authorizedAdmins));
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response('unexpected server error', { status: 500 });
  }
}

export { handler as GET };
