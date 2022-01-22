import { Post } from 'common/types';
import { Box, CircularProgress } from '@mui/material';
import PostSideBar from './PostSideBar';
import PostContent from './PostContent';

type Props = {
  post?: Post;
  isLoading: boolean;
  likeMutation: { mutate: () => void; isLoading: boolean };
};

const PostPresentation = ({ post, isLoading, likeMutation }: Props) =>
  !isLoading && post ? (
    <Box sx={{ p: 4, display: 'flex', flexDirection: ['column', 'row'] }}>
      <Box sx={{ flex: 1 }}>
        <PostSideBar post={post} likeMutation={likeMutation} />
      </Box>
      <Box sx={{ flex: 2 }}>
        <PostContent post={post} />
      </Box>
    </Box>
  ) : (
    <CircularProgress size={18} />
  );

export default PostPresentation;
