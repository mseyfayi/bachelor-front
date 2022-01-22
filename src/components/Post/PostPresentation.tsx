import { Post } from 'common/types';
import { Box, CircularProgress } from '@mui/material';
import PostSideBar from 'components/Post/PostSideBar';

type Props = {
  post?: Post;
  isLoading: boolean;
  likeMutation: { mutate: () => void; isLoading: boolean };
};

const PostPresentation = ({ post, isLoading, likeMutation }: Props) =>
  !isLoading && post ? (
    <Box sx={{ p: 4, display: 'flex', flexDirection: ['column', 'row'] }}>
      <PostSideBar post={post} likeMutation={likeMutation} />
      <Box sx={{ flex: 2 }}>
        <p>Readme</p> <p>comments</p>
      </Box>
    </Box>
  ) : (
    <CircularProgress size={18} />
  );

export default PostPresentation;
