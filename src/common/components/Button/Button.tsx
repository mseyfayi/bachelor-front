import React from 'react';
import MuiButton from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button/Button';
import { CircularProgress } from '@mui/material';
import classes from './Button.module.scss';

interface Props extends ButtonProps {
  isLoading?: boolean;
}

function Button({ children, isLoading, onClick, ...restProps }: Props) {
  return (
    <MuiButton
      variant="contained"
      classes={{
        root: classes.container,
      }}
      {...restProps}
      onClick={(e) => {
        if (!isLoading && onClick) onClick(e);
      }}
    >
      {isLoading ? <CircularProgress size={20} color="inherit" /> : children}
    </MuiButton>
  );
}

export default Button;
