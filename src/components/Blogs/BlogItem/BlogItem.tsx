import { Blog, isGitBlog } from 'common/types';
import { Avatar } from '@mui/material';
import { getUsername } from 'common/utils';
import TagItem from 'common/components/TagItem';
import SimpleBlogContent from './SimpleBlogContent';
import GitBlogContent from './GitBlogContent';
import classes from './BlogItem.module.scss';

type Props = Blog;

const BlogItem = (blog: Props) => (
  <div className={classes.container}>
    <div className="d-flex flex-row">
      <Avatar src={blog.author.avatar} alt={getUsername(blog.author)} />
      <div className="d-flex flex-row flex-wrap align-items-center">
        {blog.tags.map((tag) => (
          <TagItem key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
    <div>{isGitBlog(blog) ? <GitBlogContent {...blog} /> : <SimpleBlogContent {...blog} />}</div>
  </div>
);

export default BlogItem;
