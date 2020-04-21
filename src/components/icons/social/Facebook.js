import React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409 409">
    <path fill="#475993" d="M353.701,0 L55.087,0 C24.665,0 0.002,24.662 0.002,55.085 L0.002,353.701 C0.002,384.124 24.664,408.788 55.087,408.788 L202.362,408.788 L202.613,262.708 L164.662,262.708 C159.73,262.708 155.727,258.72 155.708,253.788 L155.526,206.701 C155.507,201.742 159.522,197.712 164.481,197.712 L202.363,197.712 L202.363,152.214 C202.363,99.414 234.61,70.664 281.711,70.664 L320.361,70.664 C325.306,70.664 329.316,74.673 329.316,79.619 L329.316,119.323 C329.316,124.267 325.309,128.275 320.366,128.278 L296.647,128.289 C271.032,128.289 266.072,140.461 266.072,158.324 L266.072,197.713 L322.357,197.713 C327.72,197.713 331.881,202.396 331.249,207.722 L325.668,254.809 C325.134,259.315 321.313,262.71 316.776,262.71 L266.323,262.71 L266.072,408.788 L353.703,408.788 C384.125,408.788 408.787,384.126 408.787,353.704 L408.787,55.085 C408.787,24.662 384.124,0 353.701,0 Z"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Facebook');
Icon.Svg = Svg;

export default Icon;
