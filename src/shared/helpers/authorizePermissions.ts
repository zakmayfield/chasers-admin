import { db } from '@/lib';

export const authorizePermissions = async (
  userId: string,
  permissions: string[]
) => {
  const adminPermissionRecord = await db.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      permissions: {
        select: {
          permissionId: true,
          permission: true,
        },
      },
    },
  });
  const adminPermissions = adminPermissionRecord?.permissions.map(
    (userPermission) => userPermission.permission.name
  );
  if (!adminPermissions?.includes(permissions[0])) {
    return new Response('you are not authorized to make this request', {
      status: 401,
    });
  }
};
