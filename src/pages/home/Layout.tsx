import React from 'react';
import { Box } from '@mui/material';
import { useIQuery } from 'common/reactQuery';
import { fetchApi, getGetConfig } from 'common/utils';
import { getGetUserUrl } from 'common/path';
import type { User } from 'common/types';
import Header from 'components/layout/Header';

const Layout: React.FC = ({ children }) => {
  const { data: user } = useIQuery<User | undefined>('user', () => fetchApi(getGetUserUrl(), getGetConfig()));
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', paddingX: 0, paddingY: '60px' }}>
      <Header profile={user} />
      {children}
    </Box>
  );
};

export default Layout;
