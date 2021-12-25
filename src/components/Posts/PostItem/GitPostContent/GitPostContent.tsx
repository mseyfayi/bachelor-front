import { GitPost } from 'common/types';
import Image from 'next/image';
import classes from './GitPostContent.module.scss';

type Props = GitPost;

const GitPostContent = (props: Props) => (
  <div className={classes.container}>
    <Image src={props.repoPicture} layout="responsive" width={100} height={50} />
  </div>
);

export default GitPostContent;
