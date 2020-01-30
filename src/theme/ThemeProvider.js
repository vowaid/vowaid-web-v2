import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import { getPalette } from './muiPalette';

const ThemeProvider = (props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = (prefersDarkMode) ? 'dark' : 'light';

  const theme = createMuiTheme({
    palette: getPalette(mode),
  });

  return (
    <MuiThemeProvider {...props} theme={theme} />
  );
};

export default ThemeProvider;
