import Head from 'next/head';
import { NextPage } from 'next';
import Blogs from 'components/Blogs';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Blogs />
  </>
);

export default HomePage;
