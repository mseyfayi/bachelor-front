import { isGitPost, Post } from 'common/types';
import { MarkDown } from 'common/components';
import React from 'react';
import PostComment from '../PostComment';
import classes from './PostContent.module.scss';

type Props = {
  post: Post;
};

const PostContent = ({ post }: Props) => (
  <div className={classes.container}>
    <div className={classes.readme}>
      {isGitPost(post) && (
        <a href={post.repoUrl} target="_blank">
          {post.repoUrl}
        </a>
      )}
      <MarkDown value={isGitPost(post) ? post.readmeContent : post.content} preview />
    </div>
    {post.comments?.map((comment) => (
      <PostComment comment={comment} key={comment.id} />
    ))}
  </div>
);

export default PostContent;
