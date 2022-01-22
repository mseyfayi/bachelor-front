import React from 'react';
import { CircularProgress, IconButton } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

type Props = {
  isLiked: boolean;
  likePost: () => void;
  isLoading?: boolean;
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
};

const Like = ({ isLiked, likePost, isLoading, fontSize }: Props) =>
  isLoading ? (
    <CircularProgress size={13} />
  ) : (
    <IconButton onClick={likePost}>
      {isLiked ? (
        <ThumbUpIcon fontSize={fontSize} color="primary" />
      ) : (
        <ThumbUpOutlinedIcon fontSize={fontSize} color="inherit" />
      )}
    </IconButton>
  );

export default Like;
