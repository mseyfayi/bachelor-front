import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Kooleh Poshti</title>
    </Head>
  </>
);

export default Home;

export function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { cookies } = req;
  console.log('mohammad cookies', cookies);
  if (!cookies || !cookies.ACCESS_TOKEN) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
}
