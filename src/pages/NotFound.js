import React from 'react';
import { Typography } from '@material-ui/core';

import SEO from '../components/seo';

/**
 * Description.
 */
const NotFoundPage = () => (
  <>
    <SEO title='404 (Not found)' />
    <Typography variant='h1'>NOT FOUND</Typography>
    <Typography variant='body'>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
  </>
);

export default NotFoundPage;
