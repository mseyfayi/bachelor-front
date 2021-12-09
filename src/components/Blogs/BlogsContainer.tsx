import { fetchApi, getGetConfig } from 'common/utils';
import { getTimelineUrl } from 'common/path';
import { useState } from 'react';
import { useIQuery } from 'common/reactQuery';
import { Blog, Tag } from 'common/types';
import BlogsPresentation from './BlogsPresentation';

const BlogsContainer = () => {
  const [filters, setFilters] = useState<Array<Tag>>([]);
  const { data: list, isLoading } = useIQuery<Array<Blog> | undefined>(
    ['timeline', filters],
    () => fetchApi<Array<Blog>>(getTimelineUrl(filters), getGetConfig()),
    'خطایی در هنگام گرفتن لیست رخ داده است',
  );
  return <BlogsPresentation {...{ filters, setFilters, list, isLoading }} />;
};

export default BlogsContainer;
