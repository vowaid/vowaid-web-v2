import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import { getPalette } from './muiPalette';

const ThemeProvider = (props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const type = (prefersDarkMode) ? 'dark' : 'light';

  const theme = createMuiTheme({
    palette: getPalette(type),
  });

  return (
    <MuiThemeProvider {...props} theme={theme} />
  );
};

export default ThemeProvider;
