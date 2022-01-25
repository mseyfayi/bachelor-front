import { useRouter } from 'next/router';
import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig } from 'common/utils';
import { getResetPasswordUrl } from 'common/path';
import ConfirmCodePresentation from './ConfirmCodePresentation';

type Props = {
  email: string;
};

const ConfirmCodeContainer = ({ email }: Props) => {
  const router = useRouter();
  const mutation = useIMutation<string>(
    (code) => fetchApi(getResetPasswordUrl(), getPostConfig({ otp: code, email })),
    'تایید با شکست مواجه شد',
    {
      onSuccess: () => router.push('/auth/login'),
    },
  );
  return <ConfirmCodePresentation isLoading={mutation.isLoading} mutate={mutation.mutate} />;
};
export default ConfirmCodeContainer;
