import { useDelayedQuery, useIMutation } from 'common/reactQuery';
import { OpenGraph, Post } from 'common/types';
import { getGithubOGUrl, getPostPostsUrl } from 'common/path';
import { fetchApi, getGetConfig, getPostConfig } from 'common/utils';
import { useState } from 'react';
import NewPostPresentation from './NewPostPresentation';

const NewPostContainer = () => {
  const [githubLink, setGithubLink] = useState('');
  const createPostMutation = useIMutation<Partial<Post>>((post) => fetchApi(getPostPostsUrl(), getPostConfig(post)));
  const {
    data: openGraphData,
    isLoading: openGraphLoading,
    isError: openGraphError,
  } = useDelayedQuery<{ openGraph: OpenGraph }>(githubLink, 'github-opengraph', () =>
    true
      ? new Promise((res) =>
          res({
            openGraph: {
              image:
                'https://opengraph.githubassets.com/8216c8d1cb82210a19bf2a29ef321e23e76a2ff5647c8416d1ad7635e92ae8cd/madsams/datamining_course_utils',
              alt: 'Contribute to madsams/bachelor-front development by creating an account on GitHub.',
              title: 'madsams/bachelor-front',
              url: 'https://github.com/madsams/bachelor-front/',
              description: 'Contribute to madsams/bachelor-front development by creating an account on GitHub.',
            },
          }),
        )
      : fetchApi(getGithubOGUrl(githubLink), getGetConfig()),
  );

  return (
    <NewPostPresentation
      isLoading={createPostMutation.isLoading}
      create={createPostMutation.mutate}
      githubLink={githubLink}
      setGithubLink={setGithubLink}
      openGraph={openGraphData?.openGraph}
      openGraphLoading={openGraphLoading}
      openGraphError={openGraphError}
    />
  );
};

export default NewPostContainer;
