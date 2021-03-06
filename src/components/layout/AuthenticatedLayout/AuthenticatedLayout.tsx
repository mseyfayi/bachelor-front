import React from 'react';
import { Box } from '@mui/material';
import { useIQuery } from 'common/reactQuery';
import { fetchApi, getGetConfig } from 'common/utils';
import { getGetUserUrl } from 'common/path';
import type { User } from 'common/types';
import Footer from 'components/layout/Footer';
import style from './AuthenticatedLayout.module.scss';
import Header from '../Header';

const AuthenticatedLayout: React.FC = ({ children }) => {
  const { data: user } = useIQuery<User | undefined>('user', () => fetchApi(getGetUserUrl(), getGetConfig()));
  return (
    <Box className={style.container}>
      <Header profile={user} />
      {children}
      <Footer />
    </Box>
  );
};

export default AuthenticatedLayout;
