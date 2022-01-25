import { useRouter } from 'next/router';
import { useIMutation } from 'common/reactQuery';
import { fetchApi, getPostConfig } from 'common/utils';
import { getConfirmCodeUrl } from 'common/path';
import ConfirmCodePresentation from './ConfirmCodePresentation';

type Props = {
  email: string;
};

const ConfirmCodeContainer = ({ email }: Props) => {
  const router = useRouter();
  const mutation = useIMutation<string>(
    (code) => fetchApi(getConfirmCodeUrl(), getPostConfig({ otp: code, beheshtiEmail: email })),
    'تایید با شکست مواجه شد',
    {
      onSuccess: () => router.push('/auth/login'),
    },
  );
  return <ConfirmCodePresentation email={email} isLoading={mutation.isLoading} mutate={mutation.mutate} />;
};
export default ConfirmCodeContainer;
