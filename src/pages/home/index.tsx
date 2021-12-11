import Head from 'next/head';
import { NextPage } from 'next';
import Posts from 'components/Posts';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Posts />
  </>
);

export default HomePage;
