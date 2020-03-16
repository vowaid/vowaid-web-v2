import React from 'react';

import { Seo, LandingHero, Banner } from '../../components';

const Landing = () => {
  return (
    <main>
      <Seo
        keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
        title='Home'
      />

      <LandingHero />

      <Banner />
    </main>
  )
};

export default Landing;
