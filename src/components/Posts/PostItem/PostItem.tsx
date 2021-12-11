import { Post, isGitPost } from 'common/types';
import { Avatar } from '@mui/material';
import { getUsername } from 'common/utils';
import TagItem from 'common/components/TagItem';
import SimplePostContent from './SimplePostContent';
import GitPostContent from './GitPostContent';
import classes from './PostItem.module.scss';

type Props = Post;

const PostItem = (blog: Props) => (
  <div className={classes.container}>
    <div className="d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex flex-row align-items-center">
        <Avatar src={blog.author.avatar} alt={getUsername(blog.author)} sx={{ width: 54, height: 54 }} />
        <p className={classes.username}>{getUsername(blog.author)}</p>
      </div>
      <div className="d-flex flex-row-reverse flex-wrap align-items-center">
        {blog.tags.map((tag) => (
          <TagItem key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
    <div>{isGitPost(blog) ? <GitPostContent {...blog} /> : <SimplePostContent {...blog} />}</div>
  </div>
);

export default PostItem;
