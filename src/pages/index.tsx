import type { NextPage, GetServerSidePropsContext } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <div>
    <Head>
      <title />
    </Head>
  </div>
);

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { cookies } = req;
  if (cookies && cookies.loginInfo) {
    return {
      redirect: {
        destination: '/orders',
        permanent: false,
      },
    };
  }
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}
