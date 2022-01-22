import { Post } from 'common/types';
import { useIMutation, useIQuery } from 'common/reactQuery';
import { fetchApi, getGetConfig, getPostConfig } from 'common/utils';
import { getGetPostDetailUrl, getLikePostUrl, getUnlikePostUrl } from 'common/path';
import PostPresentation from './PostPresentation';

type Props = {
  postId: string;
};

const PostContainer = ({ postId }: Props) => {
  const { data: post, isLoading } = useIQuery<Post | undefined>(['post', postId], () =>
    true
      ? {
          id: 'id1',
          tags: [
            { id: 'tag1', name: 'امبدد', color: '#421321' },
            { id: 'tag3', name: 'عطار', color: '#42fa11' },
            { id: 'tag3', name: 'بی ناموسه', color: '#3287aa' },
          ],
          author: { id: 'u1', firstName: 'علی', lastName: 'علوی' },
          content: 'string',
          likesCount: 20,
          isLiked: true,
          commentsCount: 12,
          comments: [],
          repoUrl: 'https://github.com/vercel/next.js',
          repoPicture: 'https://repository-images.githubusercontent.com/70107786/6532af00-82ea-11ea-9d1a-7fcded8ac5d3',
          repoDescription: 'The React Framework. Contribute to vercel/next.js development by creating an account on GitHub.',
          repoTitle: 'vercel/next.js: The React Framework',
          starsCount: '79.4k',
          forksCount: '16.1k',
        }
      : fetchApi(getGetPostDetailUrl(postId), getGetConfig()),
  );

  const likeMutation = useIMutation(() =>
    fetchApi(post?.isLiked ? getUnlikePostUrl(postId) : getLikePostUrl(postId), getPostConfig()),
  );

  return <PostPresentation post={post} isLoading={isLoading} likeMutation={likeMutation} />;
};

export default PostContainer;
