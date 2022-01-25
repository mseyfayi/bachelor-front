import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../Header';
import style from './NotAuthenticatedLayout.module.scss';

const NotAuthenticatedLayout: React.FC = ({ children }) => (
  <Box className={style.container}>
    <Header />
    {children}
    <footer>
      <Typography>&copy; کوله پشتی ۱۴۰۰-</Typography>
    </footer>
  </Box>
);

export default NotAuthenticatedLayout;
