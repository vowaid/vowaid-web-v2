import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactSVG } from 'react-svg';
import { AppBar, Slide, Toolbar, useScrollTrigger, useMediaQuery } from '@material-ui/core';
import { H1, Link, NavList, NavDrawer } from '../../index';
import VowaidLogo from '../../../assets/svg/logo-horizontal-header.svg';
import VowaidLogoLight from '../../../assets/svg/logo-horizontal-header-light.svg';

const StyledReactSVG = styled(ReactSVG)`
  > * {
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  svg {
    height: 50px;
    width: auto;
  }
`;

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

const StyledToolbar = styled(Toolbar)`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-right: 0 !important;
`;

const LeftContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Header = (props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const displayMobile = useMediaQuery('(max-width: 750px)');

  return (
    <>
      <HideOnScroll>
        <AppBar color='default'>
          <StyledToolbar>
            <LeftContainer>
              <H1>
                <Link to='/'>
                  <StyledReactSVG src={(!prefersDarkMode) ? VowaidLogo : VowaidLogoLight} />
                  <span className='noshow'>Veterans of War Aid Foundation</span>
                </Link>
              </H1>
            </LeftContainer>

            {!displayMobile && <NavList />}
            {displayMobile && <NavDrawer />}
          </StyledToolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Header;
