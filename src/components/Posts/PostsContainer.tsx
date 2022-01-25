import { fetchApi, getGetConfig } from 'common/utils';
import { getGetPostsUrl } from 'common/path';
import { useState } from 'react';
import { useIQuery } from 'common/reactQuery';
import { Post, Tag } from 'common/types';
import PostsPresentation from './PostsPresentation';

const PostsContainer = () => {
  const [tags, setTags] = useState<Array<Tag['id']>>([]);
  // todo should be infinite loop
  const { data: list, isLoading } = useIQuery<Array<Post> | undefined>(
    ['posts', tags],
    () => fetchApi<Array<Post>>(getGetPostsUrl(), getGetConfig()),
    'خطایی در هنگام گرفتن لیست رخ داده است',
  );
  return <PostsPresentation {...{ tags, setTags, list, isLoading }} />;
};

export default PostsContainer;
