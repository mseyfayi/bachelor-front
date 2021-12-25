import { SimplePost } from 'common/types';
import { MarkDown } from 'common/components';
import classes from './SimplePostContent.module.scss';

type Props = SimplePost;

const SimplePostContent = (post: Props) => (
  <div className={classes.container}>
    <div className={classes.content}>
      <MarkDown value={post.content} preview />
    </div>
    {/* todo file */}
  </div>
);

export default SimplePostContent;
