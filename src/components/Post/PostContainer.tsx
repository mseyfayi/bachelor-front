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
    fetchApi(getGetPostDetailUrl(postId), getGetConfig()),
  );

  const likeMutation = useIMutation(() =>
    fetchApi(post?.isLiked ? getUnlikePostUrl(postId) : getLikePostUrl(postId), getPostConfig()),
  );

  return <PostPresentation post={post} isLoading={isLoading} likeMutation={likeMutation} />;
};

export default PostContainer;
