import Head from 'next/head';
import Posts from 'components/Posts';
import type { INextPage } from 'common/types';
import React from 'react';
import Layout from './Layout';

const HomePage: INextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Posts />
  </>
);

HomePage.Layout = Layout;

export default HomePage;
