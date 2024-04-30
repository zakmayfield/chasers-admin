import { Roles } from '@/shared/types';
import { Role } from '@prisma/client';

const validateRole = async ({
  userRole,
  accessLevel,
}: {
  userRole: Role;
  accessLevel: Role;
}): Promise<{
  isAuthorized: boolean;
}> => {
  if (userRole === Roles.SUPER) {
    return {
      isAuthorized: true,
    };
  }

  if (userRole !== accessLevel) {
    return {
      isAuthorized: false,
    };
  }

  return {
    isAuthorized: true,
  };
};
export default validateRole;
