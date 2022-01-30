import { Post, Tag } from 'common/types';
import { Dispatch, SetStateAction } from 'react';
import { CategoriesSelectors, Chronology } from 'common/components';
import PostItem from './PostItem';
import classes from './PostsPresentation.module.scss';
import NewPost from './NewPost';

interface Props {
  tags: Array<Tag['id']>;
  setTags: Dispatch<SetStateAction<Array<Tag['id']>>>;
  posts: Array<Post> | undefined;
  isLoading: boolean;
}

const PostsPresentation = ({ tags, setTags, posts = [] }: Props) => {
  const renderItems = () => posts.map((post) => <PostItem key={post.id} {...post} />);

  return (
    <div className={classes.container}>
      <CategoriesSelectors tags={tags} setTags={setTags} />
      <Chronology elements={[<NewPost />, ...renderItems()]} />
    </div>
  );
};

export default PostsPresentation;
