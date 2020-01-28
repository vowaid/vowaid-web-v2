import { Link, React, styled } from 'appReact';

import Layout from 'components/layout/Layout';
import SEO from 'components/seo';

import Banner from 'components/cta/Banner';
import Hero from 'components/services/Hero';
import Button from 'components/buttons/Button';
import Programs from 'components/services/Programs';

import { colors, gutter } from 'styles/util';

/**
 * Description.
 */
const IndexPage = () => (
  <Layout>
    <SEO
      keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
      title='Services'
    />

    <Hero />

    <Content>
      <Programs />

      <Contact>
        <header>
          <h1>How Can I Find Help?</h1>
          <h2>Our clubs are here to support you!</h2>
        </header>

        <p className='font-size--3'>Take a look at our veteran support clubs above, and get the right support for you.</p>

        <SignIn>
          <p>Already signed up with us?</p>
          <Link to="/">Sign In Here</Link>
        </SignIn>

        <h3>Don’t see what you’re looking for? Please reach out to us.</h3>

        <ContactInfo>
          <li>
            <p className='font-size--4'>Send us an email</p>
            <a href='mailto:contact@vowaidfoundation.org'>contact@vowaidfoundation.org</a>
          </li>

          <li>
            <p className='font-size--4'>Give us a ring</p>
            <a href='tel:7816061737'>781.606.1737</a>
          </li>
        </ContactInfo>
      </Contact>
    </Content>

    <Banner background={colors.blue.default.hex} />
  </Layout>
);

const Content = styled.article`
  margin: 0 auto;
  width: 90vw;
`;

const Contact = styled.section`
  margin-bottom: ${gutter.XXL};
  text-align: center;

  header {
    margin-bottom: ${gutter.L};
  }

  h1 {
    margin-bottom: ${gutter.M};
  }
`;

const SignIn = styled.div`
  margin: ${gutter.XXL} 0;

  p {
    margin-bottom: ${gutter.S};
  }
`;

const ContactInfo = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: ${gutter.M};

  li:not(:last-child) {
    margin-right: 15vw;
  }

  p:not(:last-child) {
    margin-bottom: ${gutter.S};
  }
`;

export default IndexPage;
