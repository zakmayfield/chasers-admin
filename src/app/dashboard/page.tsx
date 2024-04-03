import { Dashboard } from '@/features';
import { getAuthSession } from '@/lib/auth';
import { notFound } from 'next/navigation';

export default async function Page() {
  const session = await getAuthSession();
  if (!session || !session.user) {
    return notFound();
  }
  return <Dashboard />;
}
