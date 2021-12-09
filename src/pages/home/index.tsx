import Head from 'next/head';
import { NextPage } from 'next';
import Home from 'components/Blogs';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Home />
  </>
);

export default HomePage;
