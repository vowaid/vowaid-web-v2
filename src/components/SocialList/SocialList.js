import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import uuidv4 from 'uuid/v4';

import { ReactSVG } from 'react-svg';
import Link from '../Link/Link';

import { createTransitionForProperties, gutter } from '../../styles/utils';
import { vowaidColors } from '../../styles/colors';

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
  const { socialLinks } = props;
  const classes = useStyles(props);

  const fetchSocialIcon = (socialMedia) => {
    switch(socialMedia) {
      case 'facebook':
        return <StyledSvg src={FacebookIcon} className={classes.root} />;
      case 'github':
        return <StyledSvg src={GitHubIcon} className={classes.root} />;
      case 'instagram':
        return <StyledSvg src={InstagramIcon} className={classes.root} />;
      case 'linkedin':
        return <StyledSvg src={LinkedInIcon} className={classes.root} />;
      case 'twitter':
        return <StyledSvg src={TwitterIcon} className={classes.root} />;
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
          <Link
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

const StyledSvg = styled(ReactSVG)`
  .injected-svg {
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
    '& .injected-svg:not(:hover) *': {
      fill: vowaidColors.fontColor[theme.palette.type],
    }
  }),
}));
