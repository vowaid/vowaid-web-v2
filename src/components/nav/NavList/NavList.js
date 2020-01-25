import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';

// import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';

// import DonateButton from 'components/buttons/DonateButton';
// import ShoppingBag from '../../../assets/icons/google/shopping-bag.svg';

/**
 * Description.
 *
 * @param {} props.className
 * @param {} props.showAuthModal
 */
const NavList = ({ className, showAuthModal }) => (
  <StyledNav>
    <StyledButtonGroup className={className}>
      <Button className='MuiToolbar-regular'>
        <NavLink className='link--reset' to='/about'>About</NavLink>
      </Button>

      <Button className='MuiToolbar-regular'>
        <NavLink className='link--reset' to='/services'>Services</NavLink>
      </Button>

      <Button className='MuiToolbar-regular' color='secondary' variant='contained'>Donate</Button>

      <Button className='MuiToolbar-regular' onClick={showAuthModal}>Sign&nbsp;In</Button>
    </StyledButtonGroup>
  </StyledNav>
);

NavList.propTypes = {
  showAuthModal: PropTypes.func.isRequired,
};

const StyledNav = styled.nav`
  height: 100%;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  height: 100%;

  button {
    border-radius: 0;
    border: none;
    height: 100%;
  }
`;

const NavLink = styled(Link)`
  height: 100%;
  width: 100%;
`;

export default NavList;
