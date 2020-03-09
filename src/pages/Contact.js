import React from 'react';
import styled from 'styled-components';

import { Typography } from '@material-ui/core';
import { ReactSVG } from 'react-svg';
import { Button, H1, H2, P, Link, Content, Seo, Banner, ContactForm } from '../components';

import MapMarker from '../assets/icons/google/map-placeholder.svg';
import Phone from '../assets/icons/google/phone-call-button.svg';
import Envelope from '../assets/icons/google/envelope-email-symbol.svg';

import { createTransitionForProperties, gutter } from '../styles/utils';

/**
 * Description.
 */
const ContactPage = () => (
  <main>
    <Seo title='Contact' />

    <Content>
      <Header>
        <H1>Reach Out</H1>

        <P variant='h5' paragraph>Have a question? Can’t find the information that you’re looking for?</P>
        <P variant='body1' paragraph>Drop us a line and one of our team members will be in touch&nbsp;shortly.</P>
      </Header>

      <Article>
        <Section>
          <header>
            <ReactSVG className='icon' src={Envelope} />
            <H2>General Inquiries:</H2>
          </header>

          <Link
            className='font-size--4'
            href='mailto:contact@vowaid.org'
            underline='hover'
          >contact@vowaid.org</Link>
        </Section>

        <Section>
          <header>
            <ReactSVG className='icon' src={Phone} />
            <H2>Phone:</H2>
          </header>

          <Link
            className='font-size--4'
            href='tel:781-606-1737'
            underline='hover'
          >(781) 606-1737</Link>
        </Section>

        <Section>
          <header>
            <ReactSVG className='icon' src={MapMarker} />
            <Typography component='h2' variant='h3'>Address:</Typography>
          </header>

          <address className='font-size--4'>
            <span>2307 S. Rural Road</span>
            <span>Tempe, Arizona 85282</span>
          </address>
        </Section>
      </Article>

      <Article>
        <ContactForm />
      </Article>

      <FaqSection>
        <Typography component='p' variant='body1'>Or, find your answers here:</Typography>

        <Button
          color='default'
          variant='text'
          component={Link}
          to='/about/faqs'
        >FAQs</Button>
      </FaqSection>
    </Content>

    <Banner />
  </main>
);

const Header = styled.header`
  text-align: center;
  padding: ${gutter.XXL} 10vw;
  margin: 0;

  h1 {
    margin-bottom: ${gutter.M};
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  float: right;
  width: 47vw;
  padding-right: 3vw;
  ${createTransitionForProperties(['padding', 'width'])};

  &:nth-child(even) {
    padding-left: 3vw;
  }

  @media only screen and (max-width: 800px) {
    float: none;
    padding: 0 10vw;
    width: 100vw;

    &:nth-child(even) {
      padding-left: 10vw;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0 5vw;

    &:nth-child(even) {
      padding-left: 5vw;
    }
  }
`;

const Section = styled.section`
  margin-top: ${gutter.XXL};

  &:last-of-type {
    padding-bottom: ${gutter.XXL};
  }

  header {
    align-items: center;
    display: flex;
    margin-bottom: 2ex;
  }

  svg {
    height: ${gutter.M};
    margin-right: ${gutter.S};
    width: auto;
  }

  address {
    align-items: flex-start;
  }
`;

const FaqSection = styled(Section)`
  clear: both;
  text-align: center;

  a {
    margin: ${gutter.S} auto 0;
  }
`;

export default ContactPage;
