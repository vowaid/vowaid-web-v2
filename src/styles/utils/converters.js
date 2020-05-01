import Color from 'color';
import { baseFontSize } from './constants';

/**
 * Convert pixels to rems based on the base font size.
 *
 * @param {number|string} pixels The number of pixels to be converted to rems.
 * @param {string} unit The string value of the units to be used. Can be null, will default to 'rem'.
 * @return {string} Returns the em value of the pixel size provided offset from the base font.
 */
const pxToEm = (pixels, unit) => {
  const unitReturn = unit || 'rem';
  let pixelValue = pixels;

  if (typeof pixelValue === 'string') {
    // If the pixel value is a string remove the `px` unit from the string and convert the string to a number.
    pixelValue = Number(pixelValue.replace('px', ''));
  }

  // Only to 4 decimals as any more gets rounded to an improper value in the DOM.
  return `${(pixelValue / baseFontSize).toFixed(4)}${unitReturn}`;
};

/**
 * Trucate text programatically. Useful when CSS cannot be used for text overflow with ellipsis.
 *
 * @param {string} text Text to truncate.
 * @param {number} length Length at char to truncate text at.
 * @param {string} ellipsis Ellipsis or other string to denote that text has been truncated.
 *
 * @return {string} Truncated text.
 */
const truncateText = (text = '', length = 250, ellipsis = '...') => (
  text && text.length >= length
    ? `${text.substring(0, length - 3)}${ellipsis}`
    : text
);

/**
 * Convert hex values to an rgb string.
 *
 * ex.
 *   #000000 => 0, 0, 0
 *   #FFFFFF => 255, 255, 255
 *
 * @param {string} hex The hex value to be converted.
 *
 * @return {string} Returns the rgb string value from the provided hex.
 */
const hexToRgb = (hex) => (
  Color(hex).rgb().array().join(', ')
);

/**
 * Take in a number or string and return the value as a px.
 *
 * @param {number|string} number The number attempting to be converted to px value.
 * @return {string} Returns the px value based on the number received.
 */
const numToPx = (number) => {
  if (typeof number === 'number') {
      return `${number}px`;
  }

  return number;
};

export {
  hexToRgb,
  numToPx,
  pxToEm,
  truncateText,
};
