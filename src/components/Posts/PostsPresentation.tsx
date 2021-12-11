import { Post, Tag } from 'common/types';
import { Dispatch, SetStateAction } from 'react';
import { Chronology } from 'common/components';
import PostItem from './PostItem';
import classes from './PostsPresentation.module.scss';

interface Props {
  filters: Array<Tag>;
  setFilters: Dispatch<SetStateAction<Array<Tag>>>;
  list: Array<Post> | undefined;
  isLoading: boolean;
}

const PostsPresentation = ({ filters, setFilters, list, isLoading }: Props) => (
  <div className={classes.container}>
    <Chronology
      elements={list?.map((blog) => (
        <PostItem key={blog.id} {...blog} />
      ))}
    />
  </div>
);

export default PostsPresentation;
