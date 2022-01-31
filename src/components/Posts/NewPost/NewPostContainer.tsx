import { useDelayedQuery, useIMutation } from 'common/reactQuery';
import { GitPost, OpenGraph, Post } from 'common/types';
import { getGithubOGUrl, getPostPostsUrl } from 'common/path';
import { fetchApi, getGetConfig, getPostConfig } from 'common/utils';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import NewPostPresentation from './NewPostPresentation';

const NewPostContainer = () => {
  const [open, setOpen] = useState(false);
  const [githubLink, setGithubLink] = useState('');
  const client = useQueryClient();
  const createPostMutation = useIMutation<Partial<Post>>(
    (post) =>
      fetchApi(
        getPostPostsUrl(),
        getPostConfig({
          ...post,
          repoUrl: (post as GitPost).repoUrl ? `https://github.com/${(post as GitPost).repoUrl}` : undefined,
        }),
      ),
    'ساخت پست با شکست مواجه شد',
    {
      onSuccess: async () => {
        await client.invalidateQueries('posts');
        setOpen(false);
        setGithubLink('');
      },
    },
  );
  const {
    data: openGraphData,
    isLoading: openGraphLoading,
    isError: openGraphError,
  } = useDelayedQuery<{ openGraph: OpenGraph }>(githubLink, 'github-opengraph', () =>
    fetchApi(getGithubOGUrl(githubLink), getGetConfig()),
  );

  return (
    <NewPostPresentation
      open={open}
      setOpen={setOpen}
      isLoading={createPostMutation.isLoading}
      create={createPostMutation.mutateAsync}
      githubLink={githubLink}
      setGithubLink={setGithubLink}
      openGraph={openGraphData?.openGraph}
      openGraphLoading={openGraphLoading}
      openGraphError={openGraphError}
    />
  );
};

export default NewPostContainer;
