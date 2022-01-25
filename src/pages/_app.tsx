import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import type { NextComponentType } from 'next';
import { SnackbarUtilsConfigurator } from 'common/utils';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false, refetchOnMount: false } },
  });

  const theme = createTheme({
    direction: 'rtl',
    typography: { fontFamily: 'Vazir', button: { textTransform: 'none' } },
  });

  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  });

  const Layout = (Component as NextComponentType & { Layout?: React.FC }).Layout || React.Fragment;

  return (
    <QueryClientProvider client={client} contextSharing>
      <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
        <ThemeProvider theme={theme}>
          <StylesProvider jss={jss}>
            <SnackbarUtilsConfigurator />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StylesProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
