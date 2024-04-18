import { ChangePassword } from '@/features/admins/components';
import { GridLayout } from '@/shared/components';

export default function Page() {
  return (
    <GridLayout>
      <h1 className='col-span-full'>Change Password</h1>
      <ChangePassword className='border col-start-3 col-span-2' />
    </GridLayout>
  );
}
