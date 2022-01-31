import { fetchApi, getGetConfig } from 'common/utils';
import { getGetPostsUrl } from 'common/path';
import { useState } from 'react';
import { useIQuery } from 'common/reactQuery';
import { Post, Tag } from 'common/types';
import PostsPresentation from './PostsPresentation';

const PostsContainer = () => {
  const [tags, setTags] = useState<Array<Tag['id']>>([]);
  // todo page
  const { data: { posts } = {}, isLoading } = useIQuery<{ posts: Array<Post> } | undefined>(
    ['posts', ...(tags.some((tag) => !!tag) ? tags : [])],
    () => fetchApi<{ posts: Array<Post> }>(getGetPostsUrl(tags), getGetConfig()),
    'خطایی در هنگام گرفتن لیست رخ داده است',
  );
  return <PostsPresentation {...{ tags, setTags, posts, isLoading }} />;
};

export default PostsContainer;
