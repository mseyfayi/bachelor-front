import { Post } from 'common/types';
import { useIQuery } from 'common/reactQuery';
import { fetchApi, getGetConfig } from 'common/utils';
import { getGetPostDetailUrl } from 'common/path';
import PostPresentation from './PostPresentation';

type Props = {
  postId: string;
};

const PostContainer = ({ postId }: Props) => {
  const { data: post, isLoading } = useIQuery<Post | undefined>(['post', postId], () =>
    true
      ? {
          id: 'id1',
          tags: [{ id: 'tag1', name: 'امبدد', color: '#421' }],
          author: {},
          content: 'string',
          likesCount: 20,
          isLiked: true,
          commentsCount: 12,
          comments: [],
        }
      : fetchApi(getGetPostDetailUrl(postId), getGetConfig()),
  );
  return <PostPresentation post={post} isLoading={isLoading} />;
};

export default PostContainer;
