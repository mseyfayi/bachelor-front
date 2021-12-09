import { Blog, isGitBlog, Tag } from 'common/types';
import { Dispatch, SetStateAction } from 'react';
import GitBlogItem from 'components/Blogs/GitBlogItem/GitBlogItem';
import SimpleBlogItem from 'components/Blogs/SimpleBlogItem';
import classes from './BlogsPresentation.module.scss';

interface Props {
  filters: Array<Tag>;
  setFilters: Dispatch<SetStateAction<Array<Tag>>>;
  list: Array<Blog> | undefined;
  isLoading: boolean;
}

const BlogsPresentation = ({ filters, setFilters, list, isLoading }: Props) => (
  <div className={classes.container}>
    <Chronology type="vertical">
      {list?.map((blog) =>
        isGitBlog(blog) ? <GitBlogItem key={blog.id} {...blog} /> : <SimpleBlogItem key={blog.id} {...blog} />,
      )}
    </Chronology>
  </div>
);

export default BlogsPresentation;
