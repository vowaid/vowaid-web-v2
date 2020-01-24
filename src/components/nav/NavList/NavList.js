import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';

// import DonateButton from 'components/buttons/DonateButton';
import ShoppingBag from '../../../assets/icons/google/shopping-bag.svg';

/**
 * Description.
 *
 * @param {} props.className
 * @param {} props.showAuthModal
 */
const NavList = ({ className, showAuthModal }) => (
  <ButtonGroup className={className}>
    <Button>
      <NavLink className='link--reset' to='/about'>About</NavLink>
    </Button>

    <Button>
      <NavLink className='link--reset' to='/services'>Services</NavLink>
    </Button>

    <Button>
      <NavLink className='link--reset' to='/store'>Store</NavLink>
    </Button>

    <Button>Donate</Button>

    <Button onClick={showAuthModal}>Sign&nbsp;In</Button>

    <ShoppingBagBlock>
      <span className='cart--count'>0</span>
      <StyledReactSVG src={ShoppingBag} />
    </ShoppingBagBlock>
  </ButtonGroup>
);

NavList.propTypes = {
  showAuthModal: PropTypes.func.isRequired,
};

const NavLink = styled(Link)`
  height: 100%;
  width: 100%;
`;

// TODO: Update font size for the number based on digit count. Current size only works for 2 digits (up to 99).
// &:hover {
//   background: ${colors.blue.default.hex};
//   color: ${colors.white.hex};

//   svg * {
//     fill: ${colors.white.hex};
//   }
// }
const ShoppingBagBlock = styled(Button)`
  cursor: pointer;
  height: ${pxToEm(70)};
  position: relative;
  width: calc(${gutter.XL} + (1.75vw * 2));
  z-index: 100;
  ${createTransitionForProperties(['background', 'color'])};

  svg * {
    ${createTransitionForProperties(['fill'])};
  }

  > * {
    left: 50%;
    margin-right: -50%;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
  }

  span {
    font-size: ${pxToEm(24)};
    line-height: ${pxToEm(70)};
    text-align: center;
    transform: translate(-50%, -40%);
  }
`;

const StyledReactSVG = styled(ReactSVG)`
  svg {
    height: ${gutter.XXL};
    width: auto;
  }
`;

export default NavList;
