import { SimpleBlog } from 'common/types';
import classes from './SimpleBlogItem.module.scss';

type Props = SimpleBlog;

const SimpleBlogItem = (props: Props) => <div className={classes.container}>{props.readme}</div>;

export default SimpleBlogItem;
