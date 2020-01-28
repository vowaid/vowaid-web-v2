import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { getPalette } from './muiPalette';

const createTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const type = (prefersDarkMode) ? 'dark' : 'light';

  const theme = createMuiTheme({
    palette: getPalette(type),
  });

  return theme;
};

export {
  createTheme,
};
