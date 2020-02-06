import React from 'react';

import { Typography } from '@material-ui/core';

const H1 = (props) => (
  <Typography variant='h1' {...props} component='h1' />
);

const H2 = (props) => (
  <Typography variant='h2' {...props} component='h2' />
);

const H3 = (props) => (
  <Typography variant='h3' {...props} component='h3' />
);

const H4 = (props) => (
  <Typography variant='h4' {...props} component='h4' />
);

const H5 = (props) => (
  <Typography variant='h5' {...props} component='h5' />
);

const H6 = (props) => (
  <Typography variant='h6' {...props} component='h6' />
);

const P = (props) => (
  <Typography variant='body1' {...props} component='p' />
);

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
};
