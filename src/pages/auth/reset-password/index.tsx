import Head from 'next/head';
import ResetPassword from 'components/auth/ResetPassword';
import { useRouter } from 'next/router';
import type { INextPage } from 'common/types';
import NotAuthenticatedLayout from 'components/layout/NotAuthenticatedLayout';

const ResetPasswordPage: INextPage = () => {
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

ResetPasswordPage.Layout = NotAuthenticatedLayout;

export default ResetPasswordPage;
