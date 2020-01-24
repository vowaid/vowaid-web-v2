import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

// import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import VowaidLogo from 'assets/svg/logo-horizontal-header.svg';

const StyledReactSVG = styled(ReactSVG)`
  svg {
    height: 50px;
    margin: 5px 0 0 1.75vw;
    width: auto;
  }
`;

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>
        <Link className='link--reset' to='/'>
          <StyledReactSVG src={VowaidLogo} />
          <span className='noshow'>Veterans of War Aid Foundation</span>
        </Link>
      </h1>

      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
