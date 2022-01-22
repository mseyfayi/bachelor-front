import { useRouter } from 'next/router';
import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig } from 'common/utils';
import { getResetPasswordUrl } from 'common/path';
import type { Data } from './ResetPasswordPresentation';
import ResetPasswordPresentation from './ResetPasswordPresentation';

type Props = { email: string };

const ResetPasswordContainer = ({ email }: Props) => {
  const router = useRouter();
  const mutation = useIMutation<Data>(
    (data) => fetchApi(getResetPasswordUrl(), getPostConfig({ ...data, email, confirmPassword: undefined })),
    'بازنشانی با شکست مواجه شد',
    {
      onSuccess: () => router.push('/auth/login'),
    },
  );
  return <ResetPasswordPresentation email={email} isLoading={mutation.isLoading} mutate={mutation.mutate} />;
};

export default ResetPasswordContainer;
