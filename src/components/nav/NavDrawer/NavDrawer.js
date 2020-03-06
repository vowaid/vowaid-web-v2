import React from 'react';
import styled from 'styled-components';

import { Divider, SwipeableDrawer, List, ListItem } from '@material-ui/core';
import { ArrowBackIos, Menu } from '@material-ui/icons';
import { Button, Link } from '../../index';

import { gutter } from '../../../styles/utils';

const StyledList = styled(List)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  hr {
    width: 100%;
  }

  li {
    padding: 0;
  }
`;

const CloseItem = styled(ListItem)`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

const ListOption = styled(ListItem)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    display: block;
    min-height: 44px;
    padding: ${gutter.L} ${gutter.XXL};
    width: 100%;
  }

  &.left {
    a {
      text-align: left;
    }
  }
`;

const NavDrawer = (props) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <>
      <Button onClick={toggleDrawer}><Menu /></Button>

      <SwipeableDrawer anchor='right' open={open} onClose={toggleDrawer}>
        <nav>
          <StyledList>
            <CloseItem>
              <Button onClick={toggleDrawer}><ArrowBackIos /></Button>
            </CloseItem>

            <Divider />

            <ListOption className='left'>
              <Button
                variant='text'
                component={Link}
                to='/about'
              >About</Button>
            </ListOption>

            <ListOption className='left'>
              <Button
                variant='text'
                component={Link}
                to='/services'
              >Services</Button>
            </ListOption>

            <ListOption className='left'>
              <Button
                variant='text'
                component={Link}
                to='/store'
              >Store</Button>
            </ListOption>

            <ListOption>
              <Button
                color='secondary'
                variant='contained'
                component={Link}
                to='/donate'
              >Donate</Button>
            </ListOption>

            <ListOption>
              <Button
                component={Link}
                to='/signin'
              >Sign&nbsp;In</Button>
            </ListOption>
          </StyledList>
        </nav>
      </SwipeableDrawer>
    </>
  );
};

export default NavDrawer;
