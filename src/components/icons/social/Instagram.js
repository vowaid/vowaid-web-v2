import React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552 552">
    <defs>
      <linearGradient id="instagram-a" x1="50%" x2="50%" y1="99.709%" y2=".777%">
        <stop offset="0%" stop-color="#E09B3D"/>
        <stop offset="30%" stop-color="#C74C4D"/>
        <stop offset="60%" stop-color="#C21975"/>
        <stop offset="100%" stop-color="#7024C4"/>
      </linearGradient>
      <linearGradient id="instagram-b" x1="50%" x2="50%" y1="146.099%" y2="-45.16%">
        <stop offset="0%" stop-color="#E09B3D"/>
        <stop offset="30%" stop-color="#C74C4D"/>
        <stop offset="60%" stop-color="#C21975"/>
        <stop offset="100%" stop-color="#7024C4"/>
      </linearGradient>
      <linearGradient id="instagram-c" x1="50%" x2="50%" y1="658.141%" y2="-140.029%">
        <stop offset="0%" stop-color="#E09B3D"/>
        <stop offset="30%" stop-color="#C74C4D"/>
        <stop offset="60%" stop-color="#C21975"/>
        <stop offset="100%" stop-color="#7024C4"/>
      </linearGradient>
    </defs>
    <g fill="none">
      <path fill="url(#instagram-a)" d="M386.878,0 L164.156,0 C73.64,0 0,73.64 0,164.156 L0,386.878 C0,477.394 73.64,551.034 164.156,551.034 L386.878,551.034 C477.394,551.034 551.034,477.394 551.034,386.878 L551.034,164.156 C551.034,73.64 477.393,0 386.878,0 Z M495.6,386.878 C495.6,446.923 446.923,495.6 386.878,495.6 L164.156,495.6 C104.111,495.6 55.434,446.923 55.434,386.878 L55.434,164.156 C55.434,104.11 104.111,55.434 164.156,55.434 L386.878,55.434 C446.923,55.434 495.6,104.11 495.6,164.156 L495.6,386.878 L495.6,386.878 Z"/>
      <path fill="url(#instagram-b)" d="M275.517,133 C196.933,133 133,196.933 133,275.516 C133,354.099 196.933,418.033 275.517,418.033 C354.101,418.033 418.034,354.1 418.034,275.516 C418.034,196.932 354.101,133 275.517,133 Z M275.517,362.6 C227.422,362.6 188.434,323.612 188.434,275.517 C188.434,227.422 227.423,188.434 275.517,188.434 C323.612,188.434 362.6,227.422 362.6,275.517 C362.6,323.611 323.611,362.6 275.517,362.6 Z"/>
      <circle cx="418.31" cy="134.07" r="34.15" fill="url(#instagram-c)"/>
    </g>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Instagram');
Icon.Svg = Svg;

export default Icon;
