import { isGitPost, Post } from 'common/types';
import { Box, CircularProgress } from '@mui/material';

type Props = {
  post?: Post;
  isLoading: boolean;
};
const PostPresentation = ({ post, isLoading }: Props) =>
  !isLoading && post ? (
    <Box sx={{ p: 4, display: 'flex', flexDirection: ['column', 'row'] }}>
      <Box sx={{ flex: 1 }}>
        <p>user info</p>
        {isGitPost(post) && <p>repo info</p>}
        <p>tags</p>
        <Box>
          <p>like</p>
          <p>comment</p>
        </Box>
      </Box>
      <Box sx={{ flex: 3 }}>
        <p>Readme</p> <p>comments</p>
      </Box>
    </Box>
  ) : (
    <CircularProgress size={18} />
  );

export default PostPresentation;
