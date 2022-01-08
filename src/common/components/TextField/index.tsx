import React from 'react';
import { Box, CircularProgress, InputAdornment, InputBase, InputBaseProps, InputLabel } from '@mui/material';

export interface TextFieldProps extends InputBaseProps {
  id?: string;
  isLoading?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({ id, label, isLoading, disabled, ...props }, ref) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, width: { xs: 1 } }}>
    <InputLabel htmlFor={id} sx={{ width: 100 }}>
      {label}
    </InputLabel>
    <Box sx={{ width: { xs: 1 }, my: 1, borderRadius: 2, border: 1, borderColor: '#ccc' }}>
      <InputBase
        {...props}
        ref={ref}
        id={id}
        sx={{ verticalAlign: 'middle', width: 1, px: 2, py: 1 }}
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
