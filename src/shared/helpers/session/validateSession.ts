import {
  ApiSessionErrorHandlerData,
  ApiSessionErrorHandlerProps,
} from '@/shared/types';

const validateSession = ({
  session,
}: ApiSessionErrorHandlerProps): ApiSessionErrorHandlerData => {
  return {
    id: session?.user.id ?? null,
    email: session?.user.email ?? null,
  };
};

export default validateSession;
