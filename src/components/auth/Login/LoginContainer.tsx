import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig, setCookieObject, setLocalStorage, snackActions } from 'common/utils';
import { getSignInUrl } from 'common/path';
import { localStorageKeys } from 'common/constants';
import { useRouter } from 'next/router';
import LoginPresentation from './LoginPresentation';
import type { Data } from './LoginPresentation';

const LoginContainer = () => {
  const router = useRouter();
  const mutation = useIMutation<Data, { accessToken: string } | undefined>(
    (data) => fetchApi(getSignInUrl(), getPostConfig({ ...data })),
    'ورود با شکست مواجه شد',
    {
      onSuccess: (response) => {
        if (response) {
          snackActions.success('ورود با موفقیت انجام شد');
          setLocalStorage(localStorageKeys.ACCESS_TOKEN, response?.accessToken);
          setCookieObject(localStorageKeys.ACCESS_TOKEN, response);
          setTimeout(() => {
            router.push('/home');
          }, 1000);
        }
      },
    },
  );
  return <LoginPresentation isLoading={mutation.isLoading} mutate={mutation.mutate} />;
};

export default LoginContainer;
