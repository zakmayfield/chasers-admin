import { ChangePassword } from '@/features/admins/components';
import { GridLayout } from '@/shared/components';

export default function Page() {
  return (
    <GridLayout>
      <h1>Change Password</h1>
      <ChangePassword />
    </GridLayout>
  );
}
