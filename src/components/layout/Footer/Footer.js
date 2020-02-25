import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import { P, Link, SocialList } from '../../index';
import Logo from '../../../assets/svg/logo.svg';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

// import BbbSeal from '../../../assets/images/bbb-charity-seal.png';
import CharityNavigatorSeal from '../../../assets/images/charity-navigator.png';
import GuideStarSeal from '../../../assets/images/guidestar-seal-gold.png';

/**
 * Global application footer.
 *
 * TODO: Break this apart into separate components.
 * TODO: Add BBB once registered.
 *
 * @param {string} props.className A string of the class names passed to the footer.
 */
const Footer = ({ className }) => (
  <footer className={className}>
    <Section>
      <FooterLogo src={Logo} />

      <Address>
        <Link href='tel:+7816061737'>781.606.1737</Link>

        <P>2307 S. Rural Road</P>
        <P>Tempe, Arizona 85282</P>
      </Address>
    </Section>

    <CenterSection>
      <FooterNav>
        <ul>
          <li>
            <Link
             to='/about'
             underline='hover'
            >About</Link>
          </li>
          <li>
            <Link
             to='/services'
             underline='hover'
            >Services</Link>
          </li>
          <li>
            <Link
             to='/about/team'
             underline='hover'
            >Team</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
             to='/about/faqs'
             underline='hover'
            >FAQs</Link>
          </li>
          <li>
            <Link
             to='/about/partners'
             underline='hover'
            >Partners</Link>
          </li>
          <li>
            <Link
             to='/contact'
             underline='hover'
            >Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
             to='/donate'
             underline='hover'
            >Donate</Link>
          </li>
          <li>
            <Link
             to='/sitemap.xml'
             underline='hover'
            >
              <small>Sitemap</small>
            </Link>
          </li>
        </ul>
      </FooterNav>

      <CharityInfo>
        <P>&copy;2019&nbsp;Veterans&nbsp;of&nbsp;War&nbsp;Aid&nbsp;Foundation</P>
        <P>Charity&nbsp;#:&nbsp;3729691</P>
        <P>EIN&nbsp;#:&nbsp;47-2465494</P>
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
            href='https://www.charitynavigator.org/index.cfm?bay=search.profile&ein=472465494'
            target='_blank'
          >
            <img src={CharityNavigatorSeal} alt='Charity Navigator' />
          </Link>
        </li>
        <li>
          <Link
            href='https://www.guidestar.org/profile/47-2465494'
            target='_blank'
          >
            <img src={GuideStarSeal} alt='Guide Star' />
          </Link>
        </li>
        {/* <li>
          <Link
            href='https://www.bbb.org/'
            target='_blank'
          >
            <img src={BbbSeal} alt='Better Business Bureau' />
          </Link>
        </li> */}
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

  a {
    color: ${vowaidColors.grayscale[90]} !important;
  }

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
    }

    section:last-child {
      flex: 3;
      height: auto;
      padding: 0;
    }
  }

  @media only screen and (max-width: 750px) {
    section {
      flex: 3;
    }

    section:first-child {
      align-items: center;
      margin-top: 0;
    }

    section:nth-child(2) {
      nav {
        justify-content: space-between;
      }

      small {
        text-align: center;
      }
    }

    section:nth-child(3) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: ${gutter.L};
      width: 100%;

      .social-list {
        li:not(:last-child) {
          margin-right: ${gutter.L};
        }

        svg {
          height: ${gutter.L};
        }
      }
    }
  }

  @media only screen and (max-width: 533px) {
    section:nth-child(2) {
      margin-top: ${gutter.L};
      padding: 0 ${gutter.M};
      justify-content: flex-start;

      nav {
        margin-bottom: ${gutter.L};
      }
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-height: ${pxToEm(230)};
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
    color: inherit;
    display: inline-block;
    margin-bottom: ${gutter.XS};
  }
`;

const CenterSection = styled(Section)`
  flex-grow: 1;
  padding: 0 ${gutter.XXL};
  min-width: ${pxToEm(350)};
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
    color: inherit;
    white-space: nowrap;
  }
`;

const CharityInfo = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;

  p {
    white-space: nowrap;

    &:not(:last-child) {
      margin-right: 1em;
    }
  }
`;

const LinkSection = styled(Section)`
  ul {
    justify-content: flex-end;
  }

  .social-list {
    width: auto;

    li:not(:last-child) {
      margin-right: 2.7vw;
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
