import Head from 'next/head';
import Login from 'components/auth/Login';
import type { INextPage } from 'common/types';

const LoginPage: INextPage = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
    <Login />
  </>
);

export default LoginPage;
