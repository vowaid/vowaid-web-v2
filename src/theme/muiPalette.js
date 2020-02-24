import { vowaidColors } from '../styles/colors';

const getPalette = (type = 'light') => ({
  type,
  primary: {
    // light: will be calculated from palette.primary.main,
    main: vowaidColors.blue[50],
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    // light: '#0066ff',
    main: vowaidColors.red[50],
    // dark: will be calculated from palette.secondary.main,
    // contrastText: '#ffcc00',
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
  text: {
    primary: vowaidColors.fontColor[type],
    // secondary: "rgba(0, 0, 0, 0.54)"
    // disabled: "rgba(0, 0, 0, 0.38)"
    // hint: "rgba(0, 0, 0, 0.38)"
  },
});

export {
  getPalette,
};
