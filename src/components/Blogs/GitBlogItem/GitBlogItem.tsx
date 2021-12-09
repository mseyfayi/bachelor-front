import { SimpleBlog } from 'common/types';
import classes from './GitBlogItem.module.scss';

type Props = SimpleBlog;

const GitBlogItem = (props: Props) => <div className={classes.container} />;

export default GitBlogItem;
