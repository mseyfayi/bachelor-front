import { fetchApi, getGetConfig } from 'common/utils';
import { getGetPostsUrl } from 'common/path';
import { useState } from 'react';
import { useIQuery } from 'common/reactQuery';
import { Post, Tag } from 'common/types';
import PostsPresentation from './PostsPresentation';

const PostsContainer = () => {
  const [filters, setFilters] = useState<Array<Tag>>([]);
  // todo should be infinite loop
  const { data: list, isLoading } = useIQuery<Array<Post> | undefined>(
    ['posts', filters],
    () => fetchApi<Array<Post>>(getGetPostsUrl(), getGetConfig()),
    'خطایی در هنگام گرفتن لیست پست‌ها رخ داده است',
  );
  return <PostsPresentation {...{ filters, setFilters, list, isLoading }} />;
};

export default PostsContainer;
