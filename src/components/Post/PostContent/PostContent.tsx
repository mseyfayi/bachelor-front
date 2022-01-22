import { Post } from 'common/types';
import { MarkDown } from 'common/components';
import classes from './PostContent.module.scss';

type Props = {
  post: Post;
};

const PostContent = ({ post }: Props) => (
  <div className={classes.container}>
    <MarkDown value={post.content} preview />
    <div>{post.comments}</div>
  </div>
);

export default PostContent;
