import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Post from 'components/Post';

const PostPage: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <Post postId={postId as string} />
    </>
  );
};

export default PostPage;
