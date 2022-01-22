import Head from 'next/head';
import { NextPage } from 'next';
import ConfirmCode from 'components/ConfirmCode';
import { useRouter } from 'next/router';

const ConfirmCodePage: NextPage = () => {
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

export default ConfirmCodePage;
