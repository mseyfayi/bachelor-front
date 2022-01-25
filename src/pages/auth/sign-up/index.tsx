import Head from 'next/head';
import SignUp from 'components/auth/SignUp';
import NotAuthenticatedLayout from 'components/layout/NotAuthenticatedLayout';
import type { INextPage } from 'common/types';

const SignUpPage: INextPage = () => (
  <>
    <Head>
      <title>SignUp</title>
    </Head>
    <SignUp />
  </>
);

SignUpPage.Layout = NotAuthenticatedLayout;

export default SignUpPage;
