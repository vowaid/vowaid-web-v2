import { pxToEm } from './converters';

/**
 * The base font size for the application.
 *
 * @enum {number}
 */
const baseFontSize = 16;

/**
 * The base container width as a 'vw' percentage property.
 *
 * @enum {number}
 */
const containerWidth = 92.7;

const gutter = {
  XXL: pxToEm(50),
  XL: pxToEm(40),
  L: pxToEm(30),
  M: pxToEm(20),
  S: pxToEm(15),
  XS: pxToEm(10),
};

export {
  baseFontSize,
  containerWidth,
  gutter,
};
