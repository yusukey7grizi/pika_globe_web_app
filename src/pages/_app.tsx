import { ThemeNesting } from 'components/themeProvider';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeNesting>
      <Component {...pageProps} />
    </ThemeNesting>
  );
}

export default MyApp;
