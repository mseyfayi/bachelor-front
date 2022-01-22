import { useRouter } from 'next/router';
import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig, snackActions } from 'common/utils';
import { getSignInUrl } from 'common/path';
import type { Data } from './ResetPasswordPresentation';
import ResetPasswordPresentation from './ResetPasswordPresentation';

type Props = { email: string };

const ResetPasswordContainer = ({ email }: Props) => {
  const router = useRouter();
  const mutation = useIMutation<Data, { accessToken: string } | undefined>(
    (data) => fetchApi(getSignInUrl(), getPostConfig({ ...data })),
    'بازنشانی با شکست مواجه شد',
    {
      onSuccess: () => {
        snackActions.success('بازنشانی با موفقیت انجام شد');
        setTimeout(() => {
          router.push('/auth/login');
        }, 1000);
      },
    },
  );
  return <ResetPasswordPresentation email={email} isLoading={mutation.isLoading} mutate={mutation.mutate} />;
};

export default ResetPasswordContainer;
