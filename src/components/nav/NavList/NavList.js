import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import { ButtonGroup } from '@material-ui/core';
import { Button, Link } from '../../index';

import ShoppingBag from '../../../assets/icons/google/shopping-bag.svg';

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

const CartButton = styled(Button)`
  position: relative;

  > * {
    position: absolute;
  }

  > .cart-icon {
    left: 5px;
  }

  svg {
    height: 44px;
    width: auto;
  }
`;

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

      <CartButton className='snipcart-checkout'>
        <ReactSVG className='cart-icon' src={ShoppingBag} />
        <span className='snipcart-items-count'>0</span>
      </CartButton>
    </ButtonGroup>
  </StyledNav>
);

export default NavList;
