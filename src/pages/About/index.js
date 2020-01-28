import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import { Button } from '@material-ui/core';

import AboutHero from '../../components/heros/AboutHero/AboutHero';
import Banner from '../../components/cta/Banner/Banner';
import Programs from '../../components/Programs/Programs';
import SEO from '../../components/seo';

import { gutter } from '../../styles/utils';
import { vowaidColors } from '../../styles/colors';

import { faqs } from '../../data/faqs';

/**
 * Description.
 */
const AboutPage = () => (
  <main>
    <SEO title='About' />

    <AboutHero />

    <AboutSection>
      <header>
        <h1>How We Help</h1>
      </header>

      <Programs />

      <LinkGroup>
        <Link className='link--reset' to='/about/team'>
          <Button
            buttonStyle='secondary'
            color={vowaidColors.blue.default}
          >Our Team</Button>
        </Link>

        <Link className='link--reset' to='/services'>
          <Button
            background={vowaidColors.red.default}
          >Our Services</Button>
        </Link>

        <Link className='link--reset' to='/about/partners'>
          <Button
            buttonStyle='secondary'
            color={vowaidColors.blue.default}
          >Our Partners</Button>
        </Link>
      </LinkGroup>
    </AboutSection>

    <FaqSection>
      <header>
        <h1>Common Questions</h1>
      </header>

      <FaqList>
        {faqs.map((faq, index) => ((index < 3) && (
          <li key={uuidv4()}>
            <h2>{faq.question}</h2>
            {ReactHtmlParser(faq.answer)}
          </li>
        )))}
      </FaqList>

      <Link to='/about/faqs'>See More</Link>
    </FaqSection>
    <Banner />
  </main>
);

const AboutSection = styled.section`
  margin-top: ${gutter.XXL};
  text-align: center;

  &:last-of-type {
    margin-bottom: ${gutter.XXL};
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
