import { Blog, isGitBlog } from 'common/types';
import SimpleBlogItem from './SimpleBlogItem';
import GitBlogItem from './GitBlogItem';
import classes from './BlogItem.module.scss';

type Props = Blog;

const BlogItem = (blog: Props) => (
  <div className={classes.container}>
    {isGitBlog(blog) ? <GitBlogItem key={blog.id} {...blog} /> : <SimpleBlogItem key={blog.id} {...blog} />}
  </div>
);

export default BlogItem;
