import React from 'react';
import { styled as muiStyled } from '@material-ui/core/styles';
import styled from 'styled-components';

import { Button, ButtonGroup } from '@material-ui/core';
import Link from '../../Link/Link';

// import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';

// import DonateButton from 'components/buttons/DonateButton';
// import ShoppingBag from '../../../assets/icons/google/shopping-bag.svg';

/**
 * Description.
 *
 * @param {} props.className
 */
const NavList = ({ className }) => (
  <StyledNav>
    <StyledButtonGroup className={className} variant='text'>
      <Button
        className='MuiToolbar-regular'
        component={Link}
        to='/about'
        format='nav'
      >About</Button>

      <Button
        className='MuiToolbar-regular'
        component={Link}
        to='/services'
        format='nav'
      >Services</Button>

      <Button
        className='MuiToolbar-regular'
        color='secondary'
        variant='contained'
      >Donate</Button>

      <Button
        className='MuiToolbar-regular'
        component={Link}
        to='/signin'
        format='nav'
      >Sign&nbsp;In</Button>
    </StyledButtonGroup>
  </StyledNav>
);

const StyledNav = styled.nav`
  height: 100%;

  a {
    border: none;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    height: 100%;
  }
`;

const StyledButtonGroup = muiStyled(ButtonGroup)`
  box-sizing: border-box;
  height: 100%;
`;

export default NavList;
