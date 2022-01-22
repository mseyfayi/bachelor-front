import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig } from 'common/utils';
import { getSignUpUrl } from 'common/path';
import SignUpPresentation from './SignUpPresentation';
import type { Data } from './SignUpPresentation';

const SignUpContainer = () => {
  const mutation = useIMutation<Omit<Data, 'confirmPassword'>>((data) =>
    fetchApi(getSignUpUrl(), getPostConfig({ ...data, confirmPassword: undefined })),
  );

  return <SignUpPresentation isLoading={mutation.isLoading} mutation={mutation.mutate} />;
};

export default SignUpContainer;
