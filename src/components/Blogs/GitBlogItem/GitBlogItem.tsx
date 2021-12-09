import { GitBlog } from 'common/types';
import classes from './GitBlogItem.module.scss';

type Props = GitBlog;

const GitBlogItem = (props: Props) => <div className={classes.container}>{props.readme}</div>;

export default GitBlogItem;
