import { useRouter } from 'next/router';
import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig, setLocalStorage, snackActions } from 'common/utils';
import { getSignInUrl } from 'common/path';
import { localStorageKeys } from 'common/constants';
import ResetPasswordPresentation from './ResetPasswordPresentation';
import type { Data } from './ResetPasswordPresentation';

type Props = { email: string };

const ResetPasswordContainer = ({ email }: Props) => {
  const router = useRouter();
  const mutation = useIMutation<Data, { accessToken: string } | undefined>(
    (data) => fetchApi(getSignInUrl(), getPostConfig({ ...data })),
    'ورود با شکست مواجه شد',
    {
      onSuccess: (response) => {
        snackActions.success('ورود با موفقیت انجام شد');
        setLocalStorage(localStorageKeys.ACCESS_TOKEN, response?.accessToken);
        setTimeout(() => {
          router.push('/home');
        }, 1000);
      },
    },
  );
  return <ResetPasswordPresentation email={email} isLoading={mutation.isLoading} mutate={mutation.mutate} />;
};

export default ResetPasswordContainer;
