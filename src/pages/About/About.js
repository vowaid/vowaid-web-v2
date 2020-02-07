import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { Button, Container } from '@material-ui/core';
import { H1, H2 } from '../../components/Typography/Typography';
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
          <H1>How We Help</H1>
        </header>

        <Programs />

        <LinkGroup>
          <Button
            className='MuiToolbar-regular'
            variant='contained'
            color='primary'
            component={Link}
            to='/about/team'
          >Our Team</Button>

          <Button
            className='MuiToolbar-regular'
            variant='contained'
            color='secondary'
            component={Link}
            to='/services'
          >Our Services</Button>

          <Button
            className='MuiToolbar-regular'
            variant='contained'
            color='primary'
            component={Link}
            to='/about/partners'
          >Our Partners</Button>
        </LinkGroup>
      </AboutSection>

      <FaqSection component='section'>
        <header>
          <H1>Common Questions</H1>
        </header>

        <FaqList>
          {faqs.map((faq, index) => ((index < 3) && (
            <li key={uuidv4()}>
              <H2 variant='h4'>{faq.question}</H2>
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
