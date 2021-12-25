import { SimplePost } from 'common/types';
import classes from './SimplePostContent.module.scss';

type Props = SimplePost;

const SimplePostContent = (post: Props) => (
  <div className={classes.container}>
    <div className={classes.content}>{post.content}</div>
    {/* todo file */}
  </div>
);

export default SimplePostContent;
