import React from 'react';
import { Box, CircularProgress, InputAdornment, InputBase, InputBaseProps, InputLabel } from '@mui/material';

interface Props extends InputBaseProps {
  isLoading?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, Props>(({ label, isLoading, disabled, ...props }, ref) => (
  <Box sx={{ display: 'flex', alignItems: 'center', my: 1, width: { xs: 1 } }}>
    <InputLabel>{label}</InputLabel>
    <Box sx={{ width: { xs: 1 }, px: 2, py: 1, my: 1, borderRadius: 2, border: 1, borderColor: '#ccc' }}>
      <InputBase
        {...props}
        ref={ref}
        sx={{ verticalAlign: 'middle', width: 1 }}
        disabled={isLoading || disabled}
        endAdornment={
          isLoading ? (
            <InputAdornment position="end">
              <CircularProgress size={14} color="inherit" />
            </InputAdornment>
          ) : undefined
        }
      />
    </Box>
  </Box>
));

export default TextField;
