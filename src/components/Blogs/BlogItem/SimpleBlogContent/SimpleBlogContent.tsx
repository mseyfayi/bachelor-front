import { SimpleBlog } from 'common/types';
import classes from './SimpleBlogContent.module.scss';

type Props = SimpleBlog;

const SimpleBlogContent = (props: Props) => <div className={classes.container}>{props.readme}</div>;

export default SimpleBlogContent;
