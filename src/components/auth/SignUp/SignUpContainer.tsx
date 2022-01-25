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
      onSuccess: (_, data) => {
        snackActions.success('ثبت نام با موفقیت انجام شد');
        setTimeout(() => {
          router.push(`/auth/confirm-code?email=${data.beheshtiEmail}`);
        }, 1000);
      },
    },
  );

  return <SignUpPresentation isLoading={mutation.isLoading} mutate={mutation.mutate} />;
};

export default SignUpContainer;
