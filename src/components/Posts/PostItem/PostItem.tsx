import { Post, isGitPost, GitPost } from 'common/types';
import { Avatar } from '@mui/material';
import { classnames, getUsername } from 'common/utils';
import TagItem from 'common/components/TagItem';
import SimplePostContent from './SimplePostContent';
import GitPostContent from './GitPostContent';
import classes from './PostItem.module.scss';

type Props = Post;

const PostItem = (post: Props) => (
  <div className={classes.container}>
    <div className="d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex flex-row align-items-center">
        <Avatar src={post.author.avatar} alt={getUsername(post.author)} sx={{ width: 54, height: 54 }} />
        <p className={classes.username}>{getUsername(post.author)}</p>
      </div>
      <div className="d-flex flex-row-reverse flex-wrap align-items-center">
        {post.tags.map((tag) => (
          <TagItem key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
    <div>{isGitPost(post) ? <GitPostContent {...post} /> : <SimplePostContent {...post} />}</div>
    <div className={classnames('d-flex flex-row justify-content-between', classes.footer)}>
      <p>{post.likesCount}</p>
      <p>{(post as GitPost).starsCount}</p>
      <p> {post.comments.length}</p>
    </div>
  </div>
);

export default PostItem;
