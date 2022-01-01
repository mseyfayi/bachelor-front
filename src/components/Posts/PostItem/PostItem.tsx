import { isGitPost, Post } from 'common/types';
import { Avatar, IconButton } from '@mui/material';
import { classnames, fetchApi, getPostConfig, getUsername } from 'common/utils';
import TagItem from 'common/components/TagItem';
import Like from 'common/components/Like';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useIMutation } from 'common/reactQuery';
import { getLikePostUrl, getUnlikePostUrl } from 'common/path';
import SimplePostContent from './SimplePostContent';
import GitPostContent from './GitPostContent';
import classes from './PostItem.module.scss';

type Props = Post;

const PostItem = (post: Props) => {
  const likeMutation = useIMutation(() =>
    fetchApi(post.isLiked ? getUnlikePostUrl(post.id) : getLikePostUrl(post.id), getPostConfig()),
  );

  const renderFooter = () => (
    <div className={classnames('d-flex flex-row justify-content-between', classes.footer)}>
      <div>
        <Like isLiked={post.isLiked} isLoading={likeMutation.isLoading} likePost={likeMutation.mutate} />
        <p>{post.likesCount}</p>
      </div>
      <div>
        <IconButton
          onClick={() => {
            /* todo comment */
          }}
        >
          <ChatBubbleOutlineIcon />
        </IconButton>
        <p>{post.comments?.length}</p>
      </div>
    </div>
  );

  return (
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
      {renderFooter()}
    </div>
  );
};

export default PostItem;
