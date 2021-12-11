import { SimplePost } from 'common/types';
import classes from './SimplePostContent.module.scss';

type Props = SimplePost;

const SimplePostContent = (props: Props) => <div className={classes.container}>{props.readme}</div>;

export default SimplePostContent;
