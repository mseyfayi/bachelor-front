import { useRouter } from 'next/router';
import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig } from 'common/utils';
import { getForgetPasswordUrl } from 'common/path';
import type { Data } from './ForgetPasswordPresentation';
import ForgetPasswordPresentation from './ForgetPasswordPresentation';

const ForgetPasswordContainer = () => {
  const router = useRouter();
  const mutation = useIMutation<Data>(
    (data) => fetchApi(getForgetPasswordUrl(), getPostConfig({ ...data })),
    'ورود با شکست مواجه شد',
    {
      onSuccess: (_, data) => router.push(`/auth/reset-password?email=${data.beheshtiEmail}`),
    },
  );
  return <ForgetPasswordPresentation mutate={mutation.mutate} isLoading={mutation.isLoading} />;
};

export default ForgetPasswordContainer;
