import type { NextPage, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Posts from 'components/Posts';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Posts />
  </>
);

export default Home;

export function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { cookies } = req;
  if (!cookies || !cookies.loginInfo) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return {};
}
