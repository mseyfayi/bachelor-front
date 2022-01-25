import Head from 'next/head';
import Posts from 'components/Posts';
import type { INextPage } from 'common/types';
import AuthenticatedLayout from 'components/layout/AuthenticatedLayout';

const HomePage: INextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Posts />
  </>
);

HomePage.Layout = AuthenticatedLayout;

export default HomePage;
