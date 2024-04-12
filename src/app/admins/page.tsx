import { Admins } from '@/features';
import { db } from '@/lib';
import { getAuthSession } from '@/lib/auth';
import { notFound } from 'next/navigation';

export default async function Page() {
  const session = await getAuthSession();
  if (!session) {
    return notFound();
  }
  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      username: true,
    },
  });
  return <Admins username={user?.username} />;
}
