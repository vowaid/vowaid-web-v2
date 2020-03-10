import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonGroup } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Button, Link } from '../../index';

import { pxToEm } from '../../../styles/utils';

const useStyles = makeStyles(theme => ({
  nav: {
    height: '100%',

    '& a': {
      alignContent: 'center',
      alignItems: 'center',
      border: 'none',
      borderRadius: '0',
      boxShadow: 'none',
      boxSizing: 'border-box',
      display: 'inline-flex',
      justifyContent: 'center',
      height: '100%',
    },

    '& button:last-of-type': {
      minWidth: `calc(${pxToEm(44)} + 5em)`,
      position: 'relative',

      '&> *': {
        position: 'absolute',
      },

      '&> .snipcart-items-count': {
        left: pxToEm(5),
      },

      '& svg': {
        height: pxToEm(44),
        width: 'auto',
      },
    }
  },
}));

/**
 * Description.
 *
 * @param {} props.className
 */
const NavList = ({ className }) => {
  const classes = useStyles();

  return (
    <nav className={`${classes.nav} MuiToolbar-regular`}>
      <ButtonGroup className={`${className} MuiToolbar-regular`} variant='text'>
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
          component={Link}
          to='/store'
          format='nav'
        >Store</Button>

        <Button
          className='MuiToolbar-regular'
          component={Link}
          to='/contact'
          format='nav'
        >Contact</Button>

        <Button
          className='MuiToolbar-regular'
          color='secondary'
          variant='contained'
          component={Link}
          to='/donate'
          format='nav'
        >Donate</Button>

        {/* <Button
          className='MuiToolbar-regular'
          component={Link}
          to='/signin'
        >Sign&nbsp;In</Button> */}


        <Button className='snipcart-checkout'>
          <ShoppingCart />
        </Button>
      </ButtonGroup>
    </nav>
  );
};

export default NavList;
