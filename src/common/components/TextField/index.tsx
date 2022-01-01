import React from 'react';
import { Box, InputBase, InputBaseProps } from '@mui/material';

const TextField = (props: InputBaseProps) => (
  <Box sx={{ px: 2, py: 1, my: 1, borderRadius: 2, border: 1, borderColor: '#ccc' }}>
    <InputBase {...props} dir="ltr" sx={{ verticalAlign: 'middle', width: 1 }} />
  </Box>
);

export default TextField;
