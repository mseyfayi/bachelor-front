import React from 'react';
import { Box } from '@mui/material';
import style from './NotAuthenticatedLayout.module.scss';

const NotAuthenticatedLayout: React.FC = ({ children }) => <Box className={style.container}>{children}</Box>;

export default NotAuthenticatedLayout;
