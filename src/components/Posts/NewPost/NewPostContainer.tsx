import NewPostPresentation from './NewPostPresentation';

const NewPostContainer = () => {
  const createPostMutation = {
    mutate: () => {
      /* todo */
    },
    isLoading: true,
  };
  return <NewPostPresentation isLoading={createPostMutation.isLoading} create={createPostMutation.mutate} />;
};

export default NewPostContainer;
