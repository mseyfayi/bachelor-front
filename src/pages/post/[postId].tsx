import Head from 'next/head';
import { useRouter } from 'next/router';
import Post from 'components/Post';
import AuthenticatedLayout from 'components/layout/AuthenticatedLayout';
import type { INextPage } from 'common/types';

const PostPage: INextPage = () => {
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

PostPage.Layout = AuthenticatedLayout;

export default PostPage;
