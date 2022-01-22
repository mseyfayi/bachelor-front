import React from 'react';
import { Box, CircularProgress, InputAdornment, InputBase, InputBaseProps, InputLabel, Typography } from '@mui/material';

export interface TextFieldProps extends InputBaseProps {
  id?: string;
  isLoading?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  required?: boolean;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, label, required, isLoading, disabled, ...props }, ref) => (
    <Box sx={{ my: 2, width: { xs: 1 } }}>
      <InputLabel htmlFor={id} sx={{ width: 100, display: 'flex' }}>
        {label}
        {required && <Typography sx={{ color: '#f00' }}>*</Typography>}
      </InputLabel>
      <Box
        sx={{
          width: { xs: 1 },
          borderRadius: 2,
          border: 1,
          borderColor: '#ccc',
          backgroundColor: disabled ? '#eee' : undefined,
        }}
      >
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
  ),
);

export default TextField;
