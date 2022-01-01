import { useDelayedQuery, useIMutation } from 'common/reactQuery';
import { OpenGraph, Post } from 'common/types';
import { getGithubOGUrl, getPostPostsUrl } from 'common/path';
import { fetchApi, getGetConfig, getPostConfig } from 'common/utils';
import { useState } from 'react';
import NewPostPresentation from './NewPostPresentation';

const NewPostContainer = () => {
  const [githubLink, setGithubLink] = useState('');
  const createPostMutation = useIMutation<Partial<Post>>((post) => fetchApi(getPostPostsUrl(), getPostConfig(post)));
  const { data: openGraphData, isLoading: openGraphLoading } = useDelayedQuery<{ openGraph: OpenGraph }>(
    githubLink,
    'github-opengraph',
    () => fetchApi(getGithubOGUrl(githubLink), getGetConfig()),
  );

  return (
    <NewPostPresentation
      isLoading={createPostMutation.isLoading}
      create={createPostMutation.mutate}
      githubLink={githubLink}
      setGithubLink={setGithubLink}
      openGraph={openGraphData?.openGraph}
      openGraphLoading={openGraphLoading}
    />
  );
};

export default NewPostContainer;
