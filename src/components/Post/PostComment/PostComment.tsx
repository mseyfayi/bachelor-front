import React from 'react';
import type { Comment } from 'common/types';
import { Avatar } from '@mui/material';
import { getUsername } from 'common/utils';
import classes from './PostComment.module.scss';

type Props = {
  comment: Comment;
};
const PostComment = ({ comment }: Props) => (
  <div className={classes.container}>
    <div className={classes.user}>
      <Avatar src={comment.author?.avatar} alt={getUsername(comment.author)} sx={{ width: 40, height: 40 }} />
      <p>{getUsername(comment.author)}</p>
    </div>
    <p>{comment.content}</p>
  </div>
);

export default PostComment;
