import Head from 'next/head';
import ForgetPassword from 'components/auth/ForgetPassword';
import type { INextPage } from 'common/types';
import NotAuthenticatedLayout from 'components/layout/NotAuthenticatedLayout';

const ForgetPasswordPage: INextPage = () => (
  <>
    <Head>
      <title>ForgetPassword</title>
    </Head>
    <ForgetPassword />
  </>
);

ForgetPasswordPage.Layout = NotAuthenticatedLayout;

export default ForgetPasswordPage;
