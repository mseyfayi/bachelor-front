import { GitPost } from 'common/types';
import classes from './GitPostContent.module.scss';

type Props = GitPost;

const GitPostContent = (props: Props) => <div className={classes.container}>{props.readme}</div>;

export default GitPostContent;
