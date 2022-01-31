import { GitPost } from 'common/types';
import classes from './GitPostContent.module.scss';

type Props = GitPost;

const GitPostContent = (props: Props) => (
  <div className={classes.container}>
    <img src={props.image} alt={props['image:alt']} />
  </div>
);

export default GitPostContent;
