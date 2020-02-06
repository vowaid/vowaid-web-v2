import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import { Typography } from '@material-ui/core';
import Link from '../../Link/Link';
import SocialList from '../../SocialList/SocialList';
import Logo from '../../../assets/svg/logo.svg';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import BbbSeal from '../../../assets/images/bbb-charity-seal.png';
import CharityNavigatorSeal from '../../../assets/images/charity-navigator.png';
import GuideStarSeal from '../../../assets/images/guidestar-seal-gold.png';

/**
 * Global application footer.
 *
 * TODO: Break this apart into separate components.
 *
 * @param {string} props.className A string of the class names passed to the footer.
 */
const Footer = ({ className }) => (
  <footer className={className}>
    <Section>
      <FooterLogo src={Logo} />

      <Address>
        <Link href="tel:+7816061737">781.606.1737</Link>

        <Typography component='p' variant='body1'>2307 S. Rural Road</Typography>
        <Typography component='p' variant='body1'>Tempe, Arizona 85282</Typography>
      </Address>
    </Section>

    <CenterSection>
      <FooterNav>
        <ul>
          <li>
            <Link
             className='link--reset'
             to='/about'
             underline='hover'
            >About</Link>
          </li>
          <li>
            <Link
             className='link--reset'
             to='/services'
             underline='hover'
            >Services</Link>
          </li>
          <li>
            <Link
             className='link--reset'
             to='/about/team'
             underline='hover'
            >Team</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
             className='link--reset'
             to='/about/faqs'
             underline='hover'
            >FAQs</Link>
          </li>
          <li>
            <Link
             className='link--reset'
             to='/about/partners'
             underline='hover'
            >Partners</Link>
          </li>
          <li>
            <Link
             className='link--reset'
             to='/contact'
             underline='hover'
            >Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
             className='link--reset'
             to='/donate'
             underline='hover'
            >Donate</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
             className='link--reset'
             to='/sitemap.xml'
             underline='hover'
            >
              <small>Sitemap</small>
            </Link>
          </li>
        </ul>
      </FooterNav>

      <CharityInfo>
        <Typography component='small'>
          <Typography component='span'>&copy;2019 Veterans of War Aid Foundation</Typography>
          <Typography component='span'>Charity #3729691</Typography>
          <Typography component='span'>EIN #: 47-2465494</Typography>
        </Typography>
      </CharityInfo>
    </CenterSection>

    <LinkSection>
      <SocialList socialLinks={{
        facebook: '',
        instagram: '',
        twitter: '',
      }} />

      <CharityList>
        <li>
          <Link
            className='link--reset'
            to='https://www.charitynavigator.org/index.cfm?bay=search.profile&ein=472465494'
            target='_blank'
          >
            <img src={CharityNavigatorSeal} alt='Charity Navigator' />
          </Link>
        </li>
        <li>
          <Link
            className='link--reset'
            to='https://www.guidestar.org/profile/47-2465494'
            target='_blank'
          >
            <img src={GuideStarSeal} alt='Guide Star' />
          </Link>
        </li>
        <li>
          <Link
            className='link--reset'
            to='https://www.bbb.org/'
            target='_blank'
          >
            <img src={BbbSeal} alt='Better Business Bureau' />
          </Link>
        </li>
      </CharityList>
    </LinkSection>
  </footer>
);

const StyledFooter = styled(Footer)`
  background: ${vowaidColors.black};
  color: ${vowaidColors.grayscale[90]};
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
  padding: ${gutter.XXL} 3.5vw;

  @media only screen and (max-width: 1050px) {
    flex-wrap: wrap;

    section:first-child {
      flex: 1;
    }

    section:nth-child(2) {
      flex: 2;
      padding-right: 0;

      nav {
        justify-content: flex-end;
      }

      small {
        display: block;
        text-align: right;
      }
    }

    section:last-child {
      flex: 3;
      flex-direction: row;
      height: auto;
      margin-top: ${gutter.XXL};
      padding: 0;
    }
  }

  @media only screen and (max-width: 750px) {
    section {
      flex: 3;
      margin-top: ${gutter.XXL};
    }

    section:first-child {
      align-items: center;
      margin-top: 0;
    }

    section:nth-child(2) {
      padding: 0 3.3333vw;

      nav {
        justify-content: space-between;
      }

      small {
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    section:nth-child(2) {
      padding: 0;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: ${pxToEm(230)};
  justify-content: space-between;
`;

const FooterLogo = styled(ReactSVG)`
  height: auto;
  width: ${pxToEm(145)};

  * {
    fill: ${vowaidColors.white};
  }
`;

const Address = styled.address`
  a {
    display: inline-block;
    margin-bottom: ${gutter.XS};
  }
`;

const CenterSection = styled(Section)`
  flex-grow: 1;
  padding: 0 ${gutter.XXL};
`;

const FooterNav = styled.nav`
  display: flex;

  ul {
    margin-right: ${pxToEm(70)};

    &:last-child {
      margin-right: 0;
    }
  }

  li {
    margin-bottom: ${gutter.M};

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    white-space: nowrap;
  }
`;

const CharityInfo = styled.div`
  span {
    margin-right: ${gutter.S};
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const LinkSection = styled(Section)`
  ul {
    justify-content: flex-end;
  }

  .social-list {
    width: 100%;

    li {
      margin-right: 2.7vw;

      &:last-child {
        margin-right: 0;
      }
    }

    svg {
      height: ${gutter.M};
      width: auto;

      &:not(:hover) {
        * {
          fill: ${vowaidColors.white};
        }
      }

      * {
        ${createTransitionForProperties(['fill'])};
      }
    }
  }
`;

const CharityList = styled.ul`
  display: flex;
  height: ${pxToEm(70)};

  img {
    height: ${pxToEm(70)};
  }

  li {
    margin-right: 2.7vw;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default StyledFooter;
