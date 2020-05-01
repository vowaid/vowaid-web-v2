import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 100">
    <rect className='box' width="100" height="100" transform="rotate(90 50 50)"/>
    <polyline className='check' points="121.8 9 50.7 80.1 24.2 58.4"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Checkbox');
Icon.Svg = Svg;

export default Icon;
