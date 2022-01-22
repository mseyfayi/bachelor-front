import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig, snackActions } from 'common/utils';
import { getSignUpUrl } from 'common/path';
import { useRouter } from 'next/router';
import type { Data } from './SignUpPresentation';
import SignUpPresentation from './SignUpPresentation';

const SignUpContainer = () => {
  const router = useRouter();
  const mutation = useIMutation<Omit<Data, 'confirmPassword'>>(
    (data) => fetchApi(getSignUpUrl(), getPostConfig({ ...data, confirmPassword: undefined })),
    'ثبت نام با شکست مواجه شد',
    {
      onSuccess: () => {
        snackActions.success('ثبت نام با موفقیت انجام شد');
        setTimeout(() => {
          // todo otp
          router.push('/auth/login');
        }, 1000);
      },
    },
  );

  return <SignUpPresentation isLoading={mutation.isLoading} mutation={mutation.mutate} />;
};

export default SignUpContainer;
