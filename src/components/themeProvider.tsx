import { createTheme, ThemeProvider } from '@mui/material';
import { green } from '@mui/material/colors';
import { FC } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const ThemeNesting: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemeNesting };
