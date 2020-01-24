import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactSVG } from 'react-svg';
import { AppBar, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { Link } from 'react-router-dom';

import NavList from '../../nav/NavList/NavList';
import VowaidLogo from '../../../assets/svg/logo-horizontal-header.svg';

const StyledReactSVG = styled(ReactSVG)`
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
`;

const Header = (props) => {
  return (
    <>
      <HideOnScroll>
        <AppBar color='default'>
          <StyledToolbar>
            <h1>
              <Link className='link--reset' to='/'>
                <StyledReactSVG src={VowaidLogo} />
                <span className='noshow'>Veterans of War Aid Foundation</span>
              </Link>
            </h1>

            <nav>
              <NavList />
            </nav>
          </StyledToolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

export default Header;
