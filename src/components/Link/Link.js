import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@material-ui/core/styles';
import { Link as MuiLink } from '@material-ui/core';

import { Link as RouterLink, NavLink } from 'react-router-dom';

const Link = React.forwardRef((props, ref) => {
  return (
    (props.to && props.to !== '') ?
      (props.format === 'nav') ?
        <NavLink
          aria-current='page'
          activeClassName='nav-link--active'
          {...props}
        />
      :
        <RouterLink {...props} />
    :
      <MuiLink {...props} />
  );
});

const StyledLink = styled(Link)(({ theme }) => {
  const mode = theme.palette.type;
  const palette = mode === 'dark' ? 'light' : 'main';
  console.log(theme.palette);

  return {
    fontSize: theme.typography.fontSize,
    position: 'relative',
    textDecoration: 'none',

    '&[underline="hover"], &.MuiLink-underlineHover': {
      color: theme.palette.text.primary,
    },

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

    '&.nav-link--active': {
      background: theme.palette.primary[palette],
      color: theme.palette.primary.contrastText,
    },
  };
}, {
  withTheme: true,
});

Link.propTypes = {
  underline: PropTypes.oneOf(['none', 'hover', 'always']),
};

Link.defaultProps = {
  underline: 'none',
};

export default StyledLink;
