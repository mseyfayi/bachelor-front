import { useIMutation } from 'common/reactQuery';
import { Post } from 'common/types';
import { getPostPostsUrl } from 'common/path';
import { fetchApi, getPostConfig } from 'common/utils';
import NewPostPresentation from './NewPostPresentation';

const NewPostContainer = () => {
  const createPostMutation = useIMutation<Partial<Post>>((post) => fetchApi(getPostPostsUrl(), getPostConfig(post)));
  return <NewPostPresentation isLoading={createPostMutation.isLoading} create={createPostMutation.mutate} />;
};

export default NewPostContainer;
