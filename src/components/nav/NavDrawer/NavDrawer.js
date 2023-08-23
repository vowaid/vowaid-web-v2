import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonGroup, Divider, SwipeableDrawer, List, ListItem } from '@material-ui/core';
import { ArrowBackIos, Menu, ShoppingCart } from '@material-ui/icons';
import { Button, Link } from '../../index';

import { gutter, pxToEm } from '../../../styles/utils';

const useStyles = makeStyles(theme => ({
  list: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0',

    '& hr': {
      width: '100%',
    },

    '& li': {
      padding: '0',
    },
  },
  closeItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  listOption: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& a': {
      display: 'block',
      minHeight: pxToEm(44),
      minWidth: pxToEm(44),
      padding: `${gutter.L} ${gutter.XXL}`,
      width: '100%',
    },

    '&.left a': {
      textAlign: 'left',
    },

    '& svg': {
      height: pxToEm(44),
      width: 'auto',
    },
  },
  navButtons: {
    height: '100%',
  },
  navButton: {
    minHeight: pxToEm(64),
    minWidth: pxToEm(64),
    height: '100%',
  },
}));

const NavDrawer = ({ isMobile, ...others }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(isOpen);
  };

  return (
    <>
      <ButtonGroup className={classes.navButtons}>
        <Button className={classes.navButton} variant='text' onClick={toggleDrawer(true)}><Menu /></Button>

        {(!isMobile) ? (
          <Button
            className='MuiToolbar-regular'
            color='secondary'
            variant='contained'
            component={Link}
            to='/donate'
            format='nav'
          >Donate</Button>
        ) : null}

        <Button variant='text' className={`${classes.navButton} snipcart-checkout`}>
          <ShoppingCart />
        </Button>
      </ButtonGroup>

      <SwipeableDrawer anchor='right' open={open} onOpen={() => {}} onClose={toggleDrawer(false)} variant='temporary'>
        <nav>
          <List className={classes.list}>
            <ListItem className={classes.closeItem} onClick={toggleDrawer(false)}>
              <Button><ArrowBackIos /></Button>
            </ListItem>

            <Divider />

            <ListItem className={`${classes.listOption} left`} onClick={toggleDrawer(false)}>
              <Button
                variant='text'
                component={Link}
                to='/about'
                format='nav'
              >About</Button>
            </ListItem>

            <ListItem className={`${classes.listOption} left`} onClick={toggleDrawer(false)}>
              <Button
                variant='text'
                component={Link}
                to='/services'
                format='nav'
              >Services</Button>
            </ListItem>

            <ListItem className={`${classes.listOption} left`} onClick={toggleDrawer(false)}>
              <Button
                variant='text'
                component={Link}
                to='/contact'
                format='nav'
              >Contact</Button>
            </ListItem>

            <ListItem className={classes.listOption} onClick={toggleDrawer(false)}>
              <Button
                color='secondary'
                variant='contained'
                component={Link}
                to='/donate'
                format='nav'
              >Donate</Button>
            </ListItem>

            {/* <ListItem className={classes.listOption} onClick={toggleDrawer(false)}>
              <Button
                component={Link}
                to='/signin'
                format='nav'
              >Sign&nbsp;In</Button>
            </ListItem> */}
          </List>
        </nav>
      </SwipeableDrawer>
    </>
  );
};

NavDrawer.propTypes = {
  isMobile: PropTypes.bool,
};

NavDrawer.defaultProps = {
  isMobile: false,
};

export default NavDrawer;
