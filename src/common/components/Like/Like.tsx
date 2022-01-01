import React from 'react';
import { CircularProgress, IconButton } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

type Props = {
  isLiked: boolean;
  likePost: () => void;
  isLoading?: boolean;
};

const Like = ({ isLiked, likePost, isLoading }: Props) =>
  isLoading ? (
    <CircularProgress size={10} />
  ) : (
    <IconButton onClick={likePost}>
      {isLiked ? <ThumbUpIcon color="primary" /> : <ThumbUpOutlinedIcon color="inherit" />}
    </IconButton>
  );

export default Like;
