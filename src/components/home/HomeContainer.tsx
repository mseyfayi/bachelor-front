import { useQuery } from 'react-query';
import { fetchApi } from 'common/utils';
import { getTimelineUrl } from 'common/path';
import { useState } from 'react';
import HomePresentation from './HomePresentation';

const HomeContainer = () => {
  const [filters, setFilters] = useState([]);
  const { data: list, isLoading } = useQuery(['timeline', filters], () => fetchApi(getTimelineUrl(filters)));
  return <HomePresentation {...{ filters, setFilters, list, isLoading }} />;
};

export default HomeContainer;
