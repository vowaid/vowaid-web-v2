import React from 'react';

import SEO from '../components/seo';
import LandingHero from '../components/heros/LandingHero/LandingHero';

const Landing = (props) => {
  return (
    <main>
      <SEO
        keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
        title='Home'
      />

      <LandingHero />
    </main>
  )
};

export default Landing;
