'use client';

import {
  Button,
  ContainerFull,
  FlexCol,
  FlexRow,
  Form,
  Input,
  InputLayout,
  Loader,
} from '@/shared/components';
import {
  useCustomForm,
  useCustomMutation,
  useCustomQuery,
} from '@/shared/hooks';
import { authorizeAdmin } from '@/shared/services/mutations';
import { getAuthorizedAdmins } from '@/shared/services/queries/admins';
import {
  AuthorizeAdminRequestData,
  AuthorizeAdminResponseData,
  GetAuthorizedAdminsResponseData,
  QueryKeys,
} from '@/shared/types';
import { authorizedAdminsResolver } from '@/shared/validators/resolvers';
import { merge } from '@/utils';
import { FC, useState } from 'react';

interface AuthorizedAdminsProps {
  className?: string;
}

export const AuthorizedAdmins: FC<AuthorizedAdminsProps> = ({ className }) => {
  const [isForm, setIsForm] = useState(false);

  const defaultValues = {
    email: '',
  };

  const { methods, handleSubmit } = useCustomForm({
    resolver: authorizedAdminsResolver,
    defaultValues,
    onSubmit(formValues) {
      mutate(formValues);
    },
  });

  const { data, isLoading } = useCustomQuery<GetAuthorizedAdminsResponseData>({
    queryKey: [QueryKeys.AUTHORIZED_ADMINS],
    queryFn: getAuthorizedAdmins,
  });

  const { mutate } = useCustomMutation<
    AuthorizeAdminResponseData,
    AuthorizeAdminRequestData
  >({
    mutationFn: authorizeAdmin,
    onSuccessCallback(data) {
      console.log('mutation:success', { data });
      setIsForm(false);
    },
    onErrorCallback(error) {
      console.log('mutation:error', { error });
    },
  });

  return (
    <ContainerFull className={merge(`${className}`)}>
      <FlexCol className='h-full'>
        <h2>Authorized Admins</h2>

        {isForm ? (
          <ContainerFull className='bg-chasers-primary'>
            <Form
              methods={methods}
              handleSubmit={handleSubmit}
              className='mx-auto w-full'
            >
              <h4 className='mb-6'>authorize a trusted email</h4>
              <InputLayout>
                <Input
                  label='email'
                  name='email'
                  invalid={methods.formState.errors.email}
                  props={{ placeholder: 'email@example.com', required: true }}
                />
              </InputLayout>
            </Form>
          </ContainerFull>
        ) : (
          <ContainerFull className='h-full min-h-48 bg-chasers-primary'>
            {isLoading ? (
              <Loader />
            ) : (
              <FlexCol>
                {data?.map((admin) => (
                  <ContainerFull key={admin.id} className='border'>
                    {admin.email}
                  </ContainerFull>
                ))}
              </FlexCol>
            )}
          </ContainerFull>
        )}

        {!isForm ? (
          <Button content='authorize admin' action={() => setIsForm(true)} />
        ) : (
          <FlexRow>
            <Button content='save' action={() => {}} className='flex-grow' />
            <Button
              content='X'
              action={() => setIsForm(false)}
              className='bg-red-400 hover:bg-red-400/90'
            />
          </FlexRow>
        )}
      </FlexCol>
    </ContainerFull>
  );
};
