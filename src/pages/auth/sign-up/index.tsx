import Head from 'next/head';
import { NextPage } from 'next';
import SignUp from 'components/auth/SignUp';

const SignUpPage: NextPage = () => (
  <>
    <Head>
      <title>SignUp</title>
    </Head>
    <SignUp />
  </>
);

export default SignUpPage;
