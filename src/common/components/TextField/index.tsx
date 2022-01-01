import React from 'react';
import { Box, CircularProgress, InputAdornment, InputBase, InputBaseProps } from '@mui/material';

interface Props extends InputBaseProps {
  isLoading: boolean;
}

const TextField = ({ isLoading, ...props }: Props) => (
  <Box sx={{ px: 2, py: 1, my: 1, borderRadius: 2, border: 1, borderColor: '#ccc' }}>
    <InputBase
      {...props}
      sx={{ verticalAlign: 'middle', width: 1 }}
      disabled={isLoading || props.disabled}
      endAdornment={
        isLoading ? (
          <InputAdornment position="end">
            <CircularProgress size={14} color="inherit" />
          </InputAdornment>
        ) : undefined
      }
    />
  </Box>
);

export default TextField;
