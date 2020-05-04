import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Slide, Toolbar, useScrollTrigger, useMediaQuery } from '@material-ui/core';
import { H1, Link, NavList, NavDrawer } from '../../index';

import VowaidLogo from '../../icons/vowaid/LogoHorizontalHeader';
import VowaidLogoLight from '../../icons/vowaid/LogoHorizontalHeaderLight';

const centerFlex = {
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
};

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 9,
  },

  homeLogoLink: {
    ...centerFlex,

    '& svg': {
      height: '50px',
      width: 'auto',
    },
  },
  toolbar: {
    ...centerFlex,
    paddingRight: '0 !important',
  },
  leftContainer: {
    ...centerFlex,
    height: '100%',
  }
}));

const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const displayTablet = useMediaQuery('(max-width: 750px)');
  const displayMobile = useMediaQuery('(max-width: 500px)');

  return (
    <>
      <HideOnScroll>
        <AppBar color='default' className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.leftContainer}>
              <H1>
                <Link className={classes.homeLogoLink} to='/'>
                  {(!prefersDarkMode) ? <VowaidLogo /> : <VowaidLogoLight />}
                  <span className='noshow'>Veterans of War Aid Foundation</span>
                </Link>

                <span className='sr-only'>Veterans of War Aid Foundation</span>
              </H1>
            </div>

            {(displayTablet) ? <NavDrawer isMobile={displayMobile} /> : <NavList />}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Header;
