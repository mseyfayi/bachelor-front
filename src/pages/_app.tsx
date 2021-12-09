import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { SnackbarUtilsConfigurator } from 'common/utils';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarUtilsConfigurator>
      <Component {...pageProps} />
    </SnackbarUtilsConfigurator>
  );
}

export default MyApp;
