import { Blog, Tag } from 'common/types';
import { Dispatch, SetStateAction } from 'react';
import { Chronology } from 'common/components';
import BlogItem from './BlogItem';
import classes from './BlogsPresentation.module.scss';

interface Props {
  filters: Array<Tag>;
  setFilters: Dispatch<SetStateAction<Array<Tag>>>;
  list: Array<Blog> | undefined;
  isLoading: boolean;
}

const BlogsPresentation = ({ filters, setFilters, list, isLoading }: Props) => (
  <div className={classes.container}>
    <Chronology
      elements={list?.map((blog) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    />
  </div>
);

export default BlogsPresentation;
