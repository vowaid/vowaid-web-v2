import React from 'react';
import createSvgIcon from './utils/createSvgIcon';

const source = () => (
  <svg class='svg--checkbox' x='0' y='0' viewBox='0 0 135 110'>
    <rect
      class='box'
      x='5'
      y='5'
      width='100'
      height='100'
      transform='rotate(90 55 55)'
    />
    <path
      class='check'
      d='M126.8,14L55.7,85.1L29.2,63.4'
    />
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Checkbox');
Icon.Svg = Svg;

export default Icon;
