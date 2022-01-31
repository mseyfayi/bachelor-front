import Head from 'next/head';
import Github from 'components/Github';
import type { INextPage } from 'common/types';
import NotAuthenticatedLayout from 'components/layout/NotAuthenticatedLayout';

const GithubPage: INextPage = () => (
  <>
    <Head>
      <title>Github</title>
    </Head>
    <Github />
  </>
);

export default GithubPage;

GithubPage.Layout = NotAuthenticatedLayout;
