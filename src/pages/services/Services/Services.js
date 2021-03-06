import React from 'react';
import styled from 'styled-components';

import { Typography } from '@material-ui/core';
import { H1, H2, H3, P, Wrapper, Link, Seo, Banner, Programs, ServicesHero } from '../../../components';

import { gutter } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import VowaidData from '../../../data/vowaidData';

/**
 * Description.
 */
const ServicesPage = () => (
  <main>
    <Seo
      keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
      title='Services'
    />

    <ServicesHero />

    <Wrapper>
      <Programs />

      <Contact>
        <header>
          <H1>How Can I Find Help?</H1>
          <H2>Our clubs are here to support you!</H2>
        </header>

        <P variant='h4'>Take a look at our veteran support clubs above, and get the right support for you.</P>

        {/* <SignIn>
          <P variant='body1'>Already signed up with us?</P>
          <Link underline='hover' to="/signin">Sign In Here</Link>
        </SignIn> */}

        <H3>Don’t see what you’re looking for? Please reach out to us.</H3>

        <ContactInfo>
          <li>
            <P variant='h5'>Send us an email</P>
            <Link underline='hover' href={`mailto:${VowaidData.EMAIL}`}>{VowaidData.EMAIL}</Link>
          </li>

          <li>
            <Typography variant='h5' component='p'>Give us a ring</Typography>
            <Link underline='hover' href={`tel:${VowaidData.PHONE}`}>{VowaidData.PHONE}</Link>
          </li>
        </ContactInfo>
      </Contact>
    </Wrapper>

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

// const SignIn = styled.div`
//   padding: ${gutter.XXL} 0;

//   p {
//     margin-bottom: ${gutter.S};
//   }
// `;

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
