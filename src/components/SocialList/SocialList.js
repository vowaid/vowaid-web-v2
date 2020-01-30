import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import uuidv4 from 'uuid/v4';

import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { createTransitionForProperties } from '../../styles/utils';

import FacebookIcon from '../../assets/icons/social/facebook.svg';
import GitHubIcon from '../../assets/icons/social/github-logo.svg';
import InstagramIcon from '../../assets/icons/social/instagram.svg';
import LinkedInIcon from '../../assets/icons/social/linkedin-logo.svg';
import TwitterIcon from '../../assets/icons/social/twitter.svg';

/**
 * React component for the application global header. The header transitions between the 'full'
 * (desktop) version and the mobile version. The nav type is based on the full header width compared
 * to the screen width.
 *
 * @class
 */
const SocialList = (props) => {
  const fetchSocialIcon = (socialMedia) => {
    switch(socialMedia) {
      case 'facebook':
        return <ReactSVG src={FacebookIcon} />;
      case 'github':
        return <ReactSVG src={GitHubIcon} />;
      case 'instagram':
        return <ReactSVG src={InstagramIcon} />;
      case 'linkedin':
        return <ReactSVG src={LinkedInIcon} />;
      case 'twitter':
        return <ReactSVG src={TwitterIcon} />;
      default:
        return;
    }
  };

  const { socialLinks } = props;

  return (
    <StyledSocialList
      className='social-list'
      count={Object.keys(socialLinks).length}
    >
      {Object.keys(socialLinks).map((socialMedia) => (
        <li className={socialMedia} key={uuidv4()}>
          <Link
            className='link--reset'
            to={socialLinks[socialMedia]}
            target='_blank'
          >
            {fetchSocialIcon(socialMedia)}
          </Link>
        </li>
      ))}
    </StyledSocialList>
  );
};

export default SocialList;

SocialList.defaultProps = {
  socialLinks: {},
};

SocialList.propTypes = {
  socialLinks: PropTypes.objectOf(PropTypes.any).isRequired,
};

const StyledSocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: ${(props) => {
    if (props.count >= 4) {
      return '100%';
    } else if (props.count === 3) {
      return '70%';
    } else {
      return '40%';
    }
  }};

  li {
    ${createTransitionForProperties(['transform'])};

    &:hover {
      transform: scale(1.1);
    }
  }
`;
