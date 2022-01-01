import { useIMutation } from 'common/reactQuery';
import { Post } from 'common/types';
import { getPostPostsUrl } from 'common/path';
import { fetchApi, getPostConfig } from 'common/utils';
import { useState } from 'react';
import NewPostPresentation from './NewPostPresentation';

const NewPostContainer = () => {
  // todo fetch meta
  const [githubLink, setGithubLink] = useState('');
  const createPostMutation = useIMutation<Partial<Post>>((post) => fetchApi(getPostPostsUrl(), getPostConfig(post)));
  return (
    <NewPostPresentation
      isLoading={createPostMutation.isLoading}
      create={createPostMutation.mutate}
      githubLink={githubLink}
      setGithubLink={setGithubLink}
    />
  );
};

export default NewPostContainer;
