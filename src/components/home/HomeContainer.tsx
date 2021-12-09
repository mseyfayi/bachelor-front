import { fetchApi, getGetConfig } from 'common/utils';
import { getTimelineUrl } from 'common/path';
import { useState } from 'react';
import { useIQuery } from 'common/reactQuery';
import { Blog, Tag } from 'common/types';
import HomePresentation from './HomePresentation';

const HomeContainer = () => {
  const [filters, setFilters] = useState<Array<Tag>>([]);
  const { data: list, isLoading } = useIQuery<Array<Blog> | undefined>(
    ['timeline', filters],
    () => fetchApi<Array<Blog>>(getTimelineUrl(filters), getGetConfig()),
    'خطایی در هنگام گرفتن لیست رخ داده است',
  );
  return <HomePresentation {...{ filters, setFilters, list, isLoading }} />;
};

export default HomeContainer;
