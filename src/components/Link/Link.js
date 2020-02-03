import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';

const Link = (props) => (
  <StyledLink {...props} />
);

const StyledLink = styled(RouterLink)(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  color: 'inherit',
  position: 'relative',
  textDecoration: 'none',

  '&::after': {
    content: '""',
    background: 'white',
    width: '100%',
    height: '1px',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    right: '0',
    transform: 'scaleX(0)',
    transformOrigin: 'center center',
    transition: 'transform 0.3s ease',
  },

  /* Styles applied to the root element if `underline="hover"`. */
  '&[underline="hover"]:hover::after': {
    transform: 'scaleX(1)',
  },

  /* Styles applied to the root element if `underline="always"`. */
  '&[underline="always"]::after': {
    transform: 'scale(1)',
  },
}), {
  withTheme: true,
});

Link.propTypes = {
  underline: PropTypes.oneOf(['none', 'hover', 'always']),
};
Link.defaultProps = {
  underline: 'none',
};

export default Link;