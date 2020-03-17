import React from 'react';
import { styled as muiStyled } from '@material-ui/core/styles';

import { Seo } from '../../components';

const Main = muiStyled('main')(({ theme }) => {
  console.log(theme);

  return ({
  background: '#000',
  fontSize: '10rem',

  '& .text': {
    fill: 'none',
    'stroke-width': '4',
    'stroke-linejoin': 'round',
    'stroke-dasharray': '70 330',
    'stroke-dashoffset': '0',
    '-webkit-animation': 'stroke 6s infinite linear',
    animation: 'stroke 6s infinite linear',
  },

  '& .text:nth-child(5n + 1)': {
    stroke: '#F2385A',
    '-webkit-animation-delay': '-1.2s',
    'animation-delay': '-1.2s',
  },

  '& .text:nth-child(5n + 2)': {
    stroke: '#F5A503',
    '-webkit-animation-delay': '-2.4s',
    'animation-delay': '-2.4s',
  },

  '& .text:nth-child(5n + 3)': {
    stroke: '#E9F1DF',
    '-webkit-animation-delay': '-3.6s',
    'animation-delay': '-3.6s',
  },

  '& .text:nth-child(5n + 4)': {
    stroke: '#56D9CD',
    '-webkit-animation-delay': '-4.8s',
    'animation-delay': '-4.8s',
  },

  '& .text:nth-child(5n + 5)': {
    stroke: '#3AA1BF',
    '-webkit-animation-delay': '-6s',
    'animation-delay': '-6s',
  },
})}, {
  withTheme: true
});

/**
 * Description.
 */
const NotFoundPage = () => (
  <>
    <Seo title='404 (Not found)' />

    <Main>
      <svg viewBox='0 0 600 300'>
        <symbol id='s-text'>
          <text textAnchor='middle' x='50%' y='50%' dy='.35em'>
            404
          </text>
        </symbol>

        <use xlinkHref='#s-text' className='text'></use>
        <use xlinkHref='#s-text' className='text'></use>
        <use xlinkHref='#s-text' className='text'></use>
        <use xlinkHref='#s-text' className='text'></use>
        <use xlinkHref='#s-text' className='text'></use>
      </svg>
    </Main>
  </>
);

export default NotFoundPage;
