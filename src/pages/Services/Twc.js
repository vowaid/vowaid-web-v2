import React from 'react';

import { H1, P } from '../../components/Typography/Typography';
import Link from '../../components/Link/Link';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/Seo/Seo';
import Hero from '../../components/services/TwcHero.js';
import Banner from '../../components/cta/Banner';

/**
 * Description.
 */
const TwcPage = () => (
  <Layout>
    <SEO title='Transitioning Warrior Club' />

    <Hero />

    <header>
      <H1>Transitioning Warrior Club</H1>
    </header>

    <main>
      <P>The VOWAID Transitioning Warrior Club (TWC) provides a personal assistance team that focuses on our Veteran client and their family. We are dedicated to finding state and national resources that will help our Veteran Transitioning Warriors readjust to civilian life. We assist with applications for employment, advocate with non-profits and local groups that connect our Veteran Clients with a solid support system that will help them through their transition post active duty service. Most importantly, VOWAID has a network of successful business owners that have pledged to hire and train our Transitioning Warrior Club Members. Our case managers are seasoned Veterans and Military Spouses who understand the struggles of exiting active duty service. We also advocate for our Veteran clients during difficult times and emergency situations. We make the tough phone calls so they have time to focus on what matters.</P>

      <P><strong>Want to be part of our Transitioning Warrior Club? <Link to='/signup' underline='hover'>Sign up here</Link> to join our Event Ambassador Team.</strong></P>
    </main>

    <Banner />
  </Layout>
);

export default TwcPage;
