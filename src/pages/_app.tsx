import '../styles/globals.scss';
import type { AppProps } from 'next/app';
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

  return (
    <QueryClientProvider client={client} contextSharing>
      <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
        <ThemeProvider theme={theme}>
          <StylesProvider jss={jss}>
            <SnackbarUtilsConfigurator />
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
