import Head from 'next/head';
import Login from 'components/auth/Login';
import type { INextPage } from 'common/types';
import NotAuthenticatedLayout from 'components/layout/NotAuthenticatedLayout';

const LoginPage: INextPage = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
    <Login />
  </>
);

LoginPage.Layout = NotAuthenticatedLayout;

export default LoginPage;
