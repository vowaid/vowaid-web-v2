import React from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { ReactSVG } from 'react-svg';
import Content from '../../components/Content/Content';
import Link from '../../components/Link/Link';
import SEO from '../../components/Seo/Seo';
import Hero from '../../components/heroes/PartnersHero/PartnersHero';

import ForwardArrow from '../../assets/icons/google/forward-arrow.svg';
import DarkBladeLogo from '../../assets/images/partners/DarkBladeLogo_400.png';
import PopoverKingLogo from '../../assets/images/partners/popover-king-logo.png';

import { gutter, pxToEm } from '../../styles/utils';

/**
 * Description.
 */
const PartnersPage = () => (
  <main>
    <SEO title='Partners' />

    <Hero />

    <Content>
      <PartnersList>
        <Partner>
          <header>
            <img src={PopoverKingLogo} alt='Popover King Logo' />
            <h2>Popover King</h2>
          </header>

          <Description>
            <p>Our story begins we the fervent desire to bridge the very rich culinary history of New England with its re-imagined future. We strive to provide our customers and guests an authentic New England experience beginning with the venerable popover and a café/bistro menu that highlights the distinct and classic tastes of the region as well as our partnership with the enviable master roasters at Atomic Café of Boston’s North Shore.</p>
          </Description>

          <Link
            className='link--reset'
            to='https://www.popoverking.com/'
            target='_blank'
          >
            <Button
              color='primary'
            >Visit Site <Svg src={ForwardArrow} /></Button>
          </Link>
        </Partner>

        <Partner>
          <header>
            <img src={DarkBladeLogo} alt='Darkblade Systems Logo' />
            <h2>Darkblade Systems Corporation</h2>
          </header>

          <Description>
            <p>is a Service-Disabled Veteran-Owned Small Business (SDVOSB) providing scientific, engineering, technical, operational support, and training services to Federal government and Commercial clients.  Engineering specialties include development and design services for hardware and software systems fulfilling the mission needs of the Department of Defense and Intelligence Communities.  Operational and Cyber services include full spectrum project and program support, including planning, training, management, and technical evaluation.</p>

            <p>Darkblade Systems appeared on the 2016, 2017, and 2018 Inc. 5000 lists, and the 2016, 2017, and 2018 Virginia Fantastic 50 lists of fastest-growing private companies.</p>

            <p>Darkblade Systems is the proud winner of the 2018 Nunn-Perry Award for the Mentor-Protege Program (MPP) relationship with Booz Allen Hamilton at the National Geospatial Agency (NGA).</p>
          </Description>

          <Link
            className='link--reset'
            to='https://darkbladesystems.com/'
            target='_blank'
          >
            <Button
              color='primary'
            >Visit Site <Svg src={ForwardArrow} /></Button>
          </Link>
        </Partner>
      </PartnersList>
    </Content>
  </main>
);

const PartnersList = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Partner = styled.section`
  margin: ${gutter.XXL} 0;
  width: 45vw;

  header {
    margin-bottom: ${gutter.L};
    text-align: center;

    img {
      height: ${pxToEm(150)};
      margin-bottom: ${gutter.M};
      max-width: 90%;
      width: auto;
    }

    h2 {
      text-align: left;
    }
  }

  @media only screen and (max-width: 800px) {
    width: 90vw;
  }
`;

const Svg = styled(ReactSVG)`
  display: inline-block;
  margin-left: ${pxToEm(10)};

  svg {
    height: 1em;
    width: auto;
  }
`;

const Description = styled.div`
  margin-bottom: ${gutter.L};
`;

export default PartnersPage;
