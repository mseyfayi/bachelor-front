import { Post } from 'common/types';
import PostPresentation from './PostPresentation';

type Props = {
  postId: string;
};

const PostContainer = ({ postId }: Props) => <PostPresentation {...({} as Post)} />;

export default PostContainer;
