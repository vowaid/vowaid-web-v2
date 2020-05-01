import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import uuidv4 from 'uuid/v4';

import { Link } from '../index';

import { createTransitionForProperties, gutter } from '../../styles/utils';
import { vowaidColors } from '../../styles/colors';

import FacebookIcon from '../icons/social/Facebook';
import GitHubIcon from '../icons/social/GitHubLogo';
import InstagramIcon from '../icons/social/Instagram';
import LinkedInIcon from '../icons/social/LinkedInLogo';
import TwitterIcon from '../icons/social/Twitter';

/**
 * React component for the application global header. The header transitions between the 'full'
 * (desktop) version and the mobile version. The nav type is based on the full header width compared
 * to the screen width.
 *
 * @class
 */
const SocialList = (props) => {
  const { socialLinks } = props;
  const classes = useStyles(props);

  const fetchSocialIcon = (socialMedia) => {
    switch(socialMedia) {
      case 'facebook':
        return <FacebookIcon className={`icon ${classes.root}`} />;

      case 'github':
        return <GitHubIcon className={`icon ${classes.root}`} />;

      case 'instagram':
        return <InstagramIcon className={`icon ${classes.root}`} />;

      case 'linkedin':
        return <LinkedInIcon className={`icon ${classes.root}`} />;

      case 'twitter':
        return <TwitterIcon className={`icon ${classes.root}`} />;

      default:
        return;
    }
  };

  return (
    <StyledSocialList
      className='social-list'
      count={Object.keys(socialLinks).length}
    >
      {Object.keys(socialLinks).map((socialMedia) => (
        <li className={socialMedia} key={uuidv4()}>
          <StyledSvgLink
            href={socialLinks[socialMedia]}
            target='_blank'
            rel='noreferrer noopener'
          >
            {fetchSocialIcon(socialMedia)}
            <span className='sr-only'>{`Open ${socialMedia} profile`}</span>
          </StyledSvgLink>
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

const StyledSvgLink = styled(Link)`
  svg {
    height: ${gutter.L};
    width: auto;
    ${createTransitionForProperties(['fill'])};

    * {
      ${createTransitionForProperties(['fill'])};
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    '&.icon:not(:hover) *': {
      fill: vowaidColors.fontColor[theme.palette.type],
    }
  }),
}));
