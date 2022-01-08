import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig } from 'common/utils';
import { getSignInUrl } from 'common/path';
import LoginPresentation from './LoginPresentation';
import type { Data } from './LoginPresentation';

const LoginContainer = () => {
  // todo save token
  const mutation = useIMutation<Data>((data) => fetchApi(getSignInUrl(), getPostConfig({ ...data })));
  return <LoginPresentation isLoading={mutation.isLoading} signIn={mutation.mutate} />;
};

export default LoginContainer;
