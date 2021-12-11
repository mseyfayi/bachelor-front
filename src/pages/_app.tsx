import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { SnackbarUtilsConfigurator } from 'common/utils';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false, refetchOnMount: false } },
  });

  return (
    <QueryClientProvider client={client} contextSharing>
      <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
        <SnackbarUtilsConfigurator />
        <Component {...pageProps} />
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
