import { GitBlog } from 'common/types';
import classes from './GitBlogContent.module.scss';

type Props = GitBlog;

const GitBlogContent = (props: Props) => <div className={classes.container}>{props.readme}</div>;

export default GitBlogContent;
