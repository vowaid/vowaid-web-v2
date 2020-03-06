import React from 'react';

import { H1, H2, P, Seo, DonateForm } from '../components';

/**
 * Description.
 */
const DonatePage = () => (
  <main>
    <Seo title='Donate' />

    <header>
      <H1>Donate</H1>
      <H2>Change lives with your gift!</H2>

      <P>Your donation supports our mission to help Veterans in need.</P>
    </header>

    <DonateForm />
  </main>
);

export default DonatePage;
