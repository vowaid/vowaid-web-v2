import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { Button, Container, Typography } from '@material-ui/core';
import Content from '../../components/Content/Content';
import Link from '../../components/Link/Link';
import AboutHero from '../../components/heroes/AboutHero/AboutHero';
import Banner from '../../components/cta/Banner/Banner';
import Programs from '../../components/Programs/Programs';
import SEO from '../../components/Seo/Seo';

import { gutter } from '../../styles/utils';

import { faqs } from '../../data/faqs';

/**
 * Description.
 */
const AboutPage = (props) => (
  <main>
    <SEO title='About' />

    <AboutHero />

    <Content>
      <AboutSection component='section'>
        <header>
          <Typography variant='h2' component='h1'>How We Help</Typography>
        </header>

        <Programs />

        <LinkGroup>
          <Link className='link--reset' to='/about/team'>
            <Button
              className='MuiToolbar-regular'
              variant='contained'
              color='primary'
            >Our Team</Button>
          </Link>

          <Link className='link--reset' to='/services'>
            <Button
              className='MuiToolbar-regular'
              variant='contained'
              color='secondary'
            >Our Services</Button>
          </Link>

          <Link className='link--reset' to='/about/partners'>
            <Button
              className='MuiToolbar-regular'
              variant='contained'
              color='primary'
            >Our Partners</Button>
          </Link>
        </LinkGroup>
      </AboutSection>

      <FaqSection component='section'>
        <header>
          <Typography variant='h2' component='h1'>Common Questions</Typography>
        </header>

        <FaqList>
          {faqs.map((faq, index) => ((index < 3) && (
            <li key={uuidv4()}>
              <Typography variant='h4' component='h2'>{faq.question}</Typography>
              {faq.answer()}
            </li>
          )))}
        </FaqList>

        <Link to='/about/faqs' underline='hover'>See More</Link>
      </FaqSection>
    </Content>

    <Banner />
  </main>
);

const AboutSection = styled(Container)`
  padding-top: ${gutter.XXL};
  text-align: center;

  &:last-of-type {
    padding-bottom: ${gutter.XXL};
  }
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;

  > a:not(:last-child) {
    margin-right: 5vw;
  }
`;

const FaqSection = styled(AboutSection)`
  h1 {
    margin-bottom: 2ex;
  }

  h2 {
    margin-bottom: 0.75ex;
  }
`;

const FaqList = styled.ul`
  margin: 0 auto;
  text-align: left;
  width: 70vw;

  li {
    margin-bottom: ${gutter.L};
  }

  @media only screen and (max-width: 1150px) {
    width: 80vw;
  }

  @media only screen and (max-width: 800px) {
    width: 90vw;
  }
`;

export default AboutPage;
