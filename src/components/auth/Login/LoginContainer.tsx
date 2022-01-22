import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig, setLocalStorage, snackActions } from 'common/utils';
import { getSignInUrl } from 'common/path';
import { localStorageKeys } from 'common/constants';
import LoginPresentation from './LoginPresentation';
import type { Data } from './LoginPresentation';

const LoginContainer = () => {
  // todo save token
  const mutation = useIMutation<Data, { accessToken: string } | undefined>(
    (data) => fetchApi(getSignInUrl(), getPostConfig({ ...data })),
    'ورود با شکست مواجه شد',
    {
      onSuccess: (response) => {
        snackActions.success('ورود با موفقیت انجام شد');
        setLocalStorage(localStorageKeys.ACCESS_TOKEN, response?.accessToken);
      },
    },
  );
  return <LoginPresentation isLoading={mutation.isLoading} mutation={mutation.mutate} />;
};

export default LoginContainer;
