import React from 'react';
import { Box } from '@mui/material';
import { classnames } from 'common/utils';
import Footer from '../Footer';
import Header from '../Header';
import style from './NotAuthenticatedLayout.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const NotAuthenticatedLayout: React.FC<Props> = ({ children, className }) => (
  <Box className={classnames(style.container, className)}>
    <Header />
    {children}
    <Footer />
  </Box>
);

export default NotAuthenticatedLayout;
