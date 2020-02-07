import React from 'react';
import { styled } from '@material-ui/core/styles';

import { Button, Divider, Drawer, List, ListItem } from '@material-ui/core';
import { ArrowBackIos, Menu } from '@material-ui/icons';
import Link from '../../Link/Link';

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    max-width: 500px;
    width: 80%;
  }
`;

const StyledList = styled(List)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  hr {
    width: 100%;
  }
`;

const CloseItem = styled(ListItem)`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const ListOption = styled(ListItem)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.left {
    button {
      text-align: left;
    }
  }

  a {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  button {
    min-height: 44px;
    width: 80%;
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

      <StyledDrawer open={open} onClose={toggleDrawer}>
        <StyledList component="nav">
          <CloseItem>
            <Button onClick={toggleDrawer}><ArrowBackIos /></Button>
          </CloseItem>

          <Divider />

          <ListOption className='left'>
            <Button
              variant='text'
              component={Link}
              to='/about'
              type='nav'
            >About</Button>
          </ListOption>

          <ListOption className='left'>
            <Button
              variant='text'
              component={Link}
              to='/services'
              type='nav'
            >Services</Button>
          </ListOption>

          <ListOption>
            <Button
              className='MuiToolbar-regular'
              color='secondary'
              variant='contained'
            >Donate</Button>
          </ListOption>

          <ListOption>
            <Button
              className='MuiToolbar-regular'
              component={Link}
              to='/signin'
              type='nav'
            >Sign&nbsp;In</Button>
          </ListOption>
        </StyledList>
      </StyledDrawer>
    </>
  );
};

export default NavDrawer;
