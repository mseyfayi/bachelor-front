import { Blog, isGitBlog } from 'common/types';
import SimpleBlogContent from './SimpleBlogContent';
import GitBlogContent from './GitBlogContent';
import classes from './BlogItem.module.scss';

type Props = Blog;

const BlogItem = (blog: Props) => (
  <div className={classes.container}>{isGitBlog(blog) ? <GitBlogContent {...blog} /> : <SimpleBlogContent {...blog} />}</div>
);

export default BlogItem;
