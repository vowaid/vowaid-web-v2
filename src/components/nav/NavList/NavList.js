import React from 'react';
import styled from 'styled-components';

import { ButtonGroup } from '@material-ui/core';
import { Button, Link } from '../../index';

/**
 * Description.
 *
 * @param {} props.className
 */
const NavList = ({ className }) => (
  <StyledNav className='MuiToolbar-regular'>
    <ButtonGroup className={`${className} MuiToolbar-regular`} variant='text'>
      <Button
        className='MuiToolbar-regular'
        component={Link}
        to='/about'
      >About</Button>

      <Button
        className='MuiToolbar-regular'
        component={Link}
        to='/services'
      >Services</Button>

      <Button
        className='MuiToolbar-regular'
        component={Link}
        to='/store'
      >Store</Button>

      <Button
        className='MuiToolbar-regular'
        color='secondary'
        variant='contained'
        component={Link}
        to='/donate'
      >Donate</Button>

      <Button
        className='MuiToolbar-regular'
        component={Link}
        to='/signin'
      >Sign&nbsp;In</Button>
    </ButtonGroup>

    <Button className='snipcart-checkout'>
      <span className='snipcart-summary snipcart-summary-empty'>
        {/* <v-icon className='primary--text navbar-icons'>fas fa-shopping-cart</v-icon> */}
        <span className='snipcart-total-price nav-text primary--text'></span>
      </span>
    </Button>
  </StyledNav>
);

const StyledNav = styled.nav`
  height: 100%;

  a {
    align-content: center;
    align-items: center;
    border: none;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    height: 100%;
  }
`;

export default NavList;
