import Head from 'next/head';
import ConfirmCode from 'components/auth/ConfirmCode';
import { useRouter } from 'next/router';
import type { INextPage } from 'common/types';
import NotAuthenticatedLayout from 'components/layout/NotAuthenticatedLayout';

const ConfirmCodePage: INextPage = () => {
  const router = useRouter();
  const { email } = router.query;
  return (
    <>
      <Head>
        <title>ConfirmCode</title>
      </Head>
      <ConfirmCode email={email as string} />
    </>
  );
};

ConfirmCodePage.Layout = NotAuthenticatedLayout;

export default ConfirmCodePage;
