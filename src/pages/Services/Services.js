import React from 'react';
import styled from 'styled-components';

import { Typography } from '@material-ui/core';
import Content from '../../components/Content/Content';
import Link from '../../components/Link/Link'
import SEO from '../../components/seo';

import Banner from '../../components/cta/Banner/Banner';
import Hero from '../../components/heros/ServicesHero/ServicesHero';
import Programs from '../../components/Programs/Programs';

import { gutter } from '../../styles/utils';
import { vowaidColors } from '../../styles/colors';

/**
 * Description.
 */
const ServicesPage = () => (
  <main>
    <SEO
      keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
      title='Services'
    />

    <Hero />

    <Content>
      <Programs />

      <Contact>
        <header>
          <Typography variant='h2' component='h1'>How Can I Find Help?</Typography>
          <Typography variant='h3' component='h2'>Our clubs are here to support you!</Typography>
        </header>

        <Typography variant='h4' component='p'>Take a look at our veteran support clubs above, and get the right support for you.</Typography>

        <SignIn>
          <Typography variant='body1' component='p'>Already signed up with us?</Typography>
          <Link underline='hover' to="/">Sign In Here</Link>
        </SignIn>

        <Typography variant='h4' component='h3'>Don’t see what you’re looking for? Please reach out to us.</Typography>

        <ContactInfo>
          <li>
            <Typography variant='h5' component='p'>Send us an email</Typography>
            <Link underline='hover' to='mailto:contact@vowaidfoundation.org'>contact@vowaidfoundation.org</Link>
          </li>

          <li>
            <Typography variant='h5' component='p'>Give us a ring</Typography>
            <Link underline='hover' to='tel:7816061737'>781.606.1737</Link>
          </li>
        </ContactInfo>
      </Contact>
    </Content>

    <Banner background={vowaidColors.blue.default} />
  </main>
);

const Contact = styled.section`
  padding-bottom: ${gutter.XXL};
  text-align: center;

  header {
    margin-bottom: ${gutter.L};
  }

  h1 {
    margin-bottom: ${gutter.M};
  }
`;

const SignIn = styled.div`
  padding: ${gutter.XXL} 0;

  p {
    margin-bottom: ${gutter.S};
  }
`;

const ContactInfo = styled.ul`
  display: flex;
  justify-content: center;
  padding-top: ${gutter.M};

  li:not(:last-child) {
    margin-right: 15vw;
  }

  p:not(:last-child) {
    margin-bottom: ${gutter.S};
  }
`;

export default ServicesPage;
