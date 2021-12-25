import { Post, Tag } from 'common/types';
import { Dispatch, SetStateAction } from 'react';
import { Chronology } from 'common/components';
import PostItem from './PostItem';
import classes from './PostsPresentation.module.scss';
import NewPost from './NewPost';

interface Props {
  filters: Array<Tag>;
  setFilters: Dispatch<SetStateAction<Array<Tag>>>;
  list: Array<Post> | undefined;
  isLoading: boolean;
}

const PostsPresentation = ({ filters, setFilters, list = [], isLoading }: Props) => {
  const renderItems = () => list.map((post) => <PostItem key={post.id} {...post} />);

  return (
    <div className={classes.container}>
      <Chronology elements={[<NewPost />, ...renderItems()]} />
    </div>
  );
};

export default PostsPresentation;
