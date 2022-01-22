import Head from 'next/head';
import { NextPage } from 'next';
import ForgetPassword from 'components/auth/ForgetPassword';

const ForgetPasswordPage: NextPage = () => (
  <>
    <Head>
      <title>ForgetPassword</title>
    </Head>
    <ForgetPassword />
  </>
);

export default ForgetPasswordPage;
