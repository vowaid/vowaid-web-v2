import React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 129">
    <g fill="none">
      <polygon fill="#FFCB05" points="68.168 .984 52.887 49.875 .662 50.152 42.893 79.311 27.326 128.2 67.887 99.04 109.84 128.48 94 79.311 134.56 50.152 83.99 50.152"/>
      <polygon fill="#000" points="67.887 17.926 57.604 55.98 20.383 55.703 49.828 76.814 38.434 113.2 67.33 90.98 99.56 114.04 86.22 78.203 116.78 55.98 78.44 55.98"/>
      <polygon fill="#FFF" points="67.996 31.379 60.307 59.824 32.477 59.619 54.494 75.391 45.979 102.59 67.578 85.98 91.66 103.22 81.69 76.432 104.54 59.824 75.873 59.824"/>
    </g>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Army Star');
Icon.Svg = Svg;

export default Icon;
