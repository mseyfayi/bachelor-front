import { Post } from 'common/types';
import classes from './PostPresentation.module.scss';

const PostPresentation = (post: Post) => <div className={classes.container} />;

export default PostPresentation;
