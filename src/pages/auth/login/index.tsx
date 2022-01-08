import Head from 'next/head';
import { NextPage } from 'next';
import Login from 'components/auth/Login';

const LoginPage: NextPage = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
    <Login />
  </>
);

export default LoginPage;
