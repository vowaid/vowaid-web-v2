import React from 'react';
import styled from 'styled-components';

import { Card } from '@material-ui/core';
import { ReactSVG } from 'react-svg';
import { Button, H2, P, Content, Link, Seo, PartnersHero } from '../../components';

import ForwardArrow from '../../assets/icons/google/forward-arrow.svg';
import DarkBladeLogo from '../../assets/images/partners/DarkBladeLogo_400.png';

import { gutter, pxToEm } from '../../styles/utils';

/**
 * Description.
 */
const PartnersPage = () => (
  <main>
    <Seo title='Partners' />

    <PartnersHero />

    <Content>
      <PartnersList>
        <Partner>
          <header>
            <img src={DarkBladeLogo} alt='Darkblade Systems Logo' />
            <H2>Darkblade Systems Corporation</H2>
          </header>

          <Description>
            <P paragraph>is a Service-Disabled Veteran-Owned Small Business (SDVOSB) providing scientific, engineering, technical, operational support, and training services to Federal government and Commercial clients.  Engineering specialties include development and design services for hardware and software systems fulfilling the mission needs of the Department of Defense and Intelligence Communities.  Operational and Cyber services include full spectrum project and program support, including planning, training, management, and technical evaluation.</P>

            <P paragraph>Darkblade Systems appeared on the 2016, 2017, and 2018 Inc. 5000 lists, and the 2016, 2017, and 2018 Virginia Fantastic 50 lists of fastest-growing private companies.</P>

            <P paragraph>Darkblade Systems is the proud winner of the 2018 Nunn-Perry Award for the Mentor-Protege Program (MPP) relationship with Booz Allen Hamilton at the National Geospatial Agency (NGA).</P>
          </Description>

          <Button
            color='primary'
            component={Link}
            href='https://darkbladesystems.com/'
            target='_blank'
          >Visit Site <Svg className='icon' src={ForwardArrow} /></Button>
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

const Partner = styled(Card)`
  margin: ${gutter.XXL} 0;
  padding: ${gutter.M};
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
