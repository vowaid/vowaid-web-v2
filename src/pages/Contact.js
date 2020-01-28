import { Formik, Link, React, styled } from 'appReact';

import Layout from 'components/layout/Layout';
import SEO from 'components/seo';
import Button from 'components/buttons/Button';
import Banner from 'components/cta/Banner';
import ContactForm from 'components/forms/ContactForm';

import MapMarker from 'assets/icons/google/map-placeholder.svg';
import Phone from 'assets/icons/google/phone-call-button.svg';
import Envelope from 'assets/icons/google/envelope-email-symbol.svg';

import { colors, createTransitionForProperties, gutter, pxToEm } from 'styles/util';

/**
 * Description.
 */
const ContactPage = () => (
  <Layout>
    <SEO title='Contact' />

    <Header>
      <h1>Reach Out</h1>

      <p>Have a question? Can’t find the information that you’re looking for?</p>
      <p>Drop us a line and one of our team members will be in touch&nbsp;shortly.</p>
    </Header>

    <Article>
      <Section>
        <header>
          <Envelope />
          <h2>General Inquiries:</h2>
        </header>

        <a
          className='font-size--4'
          href='mailto:contact@vowaidfoundation.org'
        >contact@vowaidfoundation.org</a>
      </Section>

      <Section>
        <header>
          <Phone />
          <h2>Phone:</h2>
        </header>

        <a
          className='font-size--4'
          href='tel:781-486-3408'
        >(781) 486-3408</a>
      </Section>

      <Section>
        <header>
          <MapMarker />
          <h2>Address:</h2>
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
      <p>Or, find your answers here:</p>

      <Link className='link--reset' to='/about/faqs'>
        <Button
          buttonStyle='secondary'
          color={colors.blue.default.hex}
        >FAQs</Button>
      </Link>
    </FaqSection>

    <Banner />
  </Layout>
);

const Header = styled.header`
  text-align: center;
  padding: 0 10vw;
  margin: ${gutter.XXL} 0 0;

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
    margin-bottom: ${gutter.XXL};
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

  button {
    margin: ${gutter.S} auto 0;
  }
`;

export default ContactPage;
