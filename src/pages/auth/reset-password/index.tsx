import Head from 'next/head';
import { NextPage } from 'next';
import ResetPassword from 'components/auth/ResetPassword';
import { useRouter } from 'next/router';

const ResetPasswordPage: NextPage = () => {
  const router = useRouter();
  const { email } = router.query;
  return (
    <>
      <Head>
        <title>ResetPassword</title>
      </Head>
      <ResetPassword email={email as string} />
    </>
  );
};

export default ResetPasswordPage;
