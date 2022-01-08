import { useDelayedQuery, useIMutation, useIQuery } from 'common/reactQuery';
import { Category, OpenGraph, Post } from 'common/types';
import { getGetCategoriesUrl, getGithubOGUrl, getPostPostsUrl } from 'common/path';
import { fetchApi, getGetConfig, getPostConfig } from 'common/utils';
import { useState } from 'react';
import NewPostPresentation from './NewPostPresentation';

const NewPostContainer = () => {
  const [githubLink, setGithubLink] = useState('');
  const { data: categories, isLoading: categoriesLoading } = useIQuery<Array<Category> | undefined>('categories', () =>
    true
      ? [
          {
            id: 'course',
            title: 'درس',
            items: [
              { id: 'Embedded', name: 'امبدد', color: '#f00' },
              { id: 'Simulation', name: 'شبیه‌سازی', color: '#f0f' },
              { id: 'ًRobo', name: 'رباتیکز', color: '#00f' },
            ],
          },
          {
            id: 'prof',
            title: 'استاد',
            items: [
              { id: 'Attar', name: 'عطار', color: '#dd0' },
              { id: 'Safayi', name: 'صفایی', color: '#c6f' },
              { id: 'Salimi', name: 'سلیمی', color: '#1cf' },
            ],
          },
        ]
      : fetchApi(getGetCategoriesUrl(), getGetConfig()),
  );
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
      categories={categories}
      categoriesLoading={categoriesLoading}
    />
  );
};

export default NewPostContainer;
