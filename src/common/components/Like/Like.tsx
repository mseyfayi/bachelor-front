import React from 'react';
import { IconButton } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

type Props = {
  isLiked: boolean;
  likePost: () => void;
};

const Like = ({ isLiked, likePost }: Props) => (
  <IconButton onClick={likePost}>
    {isLiked ? <ThumbUpIcon color="primary" /> : <ThumbUpOutlinedIcon color="inherit" />}
  </IconButton>
);

export default Like;
