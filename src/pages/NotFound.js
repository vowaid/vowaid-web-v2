import React from 'react';

import { H1, P } from '../components/Typography/Typography';
import SEO from '../components/Seo/Seo';

/**
 * Description.
 */
const NotFoundPage = () => (
  <>
    <SEO title='404 (Not found)' />
    <H1>NOT FOUND</H1>
    <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
  </>
);

export default NotFoundPage;
