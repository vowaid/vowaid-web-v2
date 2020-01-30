import React from 'react';

import SEO from '../components/seo';
import LandingHero from '../components/heros/LandingHero/LandingHero';
import Banner from '../components/cta/Banner/Banner';

const Landing = () => {
  return (
    <main>
      <SEO
        keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
        title='Home'
      />

      <LandingHero />

      <Banner />
    </main>
  )
};

export default Landing;
