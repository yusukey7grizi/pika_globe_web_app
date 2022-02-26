import { NavigationBar } from 'components/molecules';
import { ThemeNesting } from 'components/themeProvider';
import { BottomNavigation } from 'components/molecules/bottomNavigation';
import { useMediaQuery } from '@mui/material';
import { ScreenSize } from 'components/constants';
import 'components/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const isIphoneSize = !useMediaQuery(ScreenSize.largerThanIphone);

  return (
    <ThemeNesting>
      <NavigationBar />
      <Component {...pageProps} />
      {isIphoneSize && <BottomNavigation />}
    </ThemeNesting>
  );
}

export default MyApp;
