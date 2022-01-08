import React from 'react';
import { Typography } from '@mui/material';

type Props = {
  error?: { message?: string };
};

const FormError = ({ error }: Props) => (
  <Typography color="red" width={1}>
    {error?.message}
  </Typography>
);

export default FormError;
