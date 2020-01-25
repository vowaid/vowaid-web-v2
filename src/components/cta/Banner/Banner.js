import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';

import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { isEmpty } from 'lodash';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

const StyledBanner = styled.article`
  align-items: center;
  background: ${(props) => props.background};
  color: ${(props) => (props.color)};
  display: flex;
  justify-content: space-between;
  padding: ${gutter.M} 15vw;
  ${createTransitionForProperties(['padding'])};

  > section {
    max-width: 34.75vw;
  }

  button {
    height: ${pxToEm(70)};
    padding: ${pxToEm(25)} ${pxToEm(75)};
  }

  @media only screen and (max-width: 1000px) {
    padding: ${gutter.M} 3.5vw;

    > section {
      max-width: 46.5vw;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;

    > section {
      margin-bottom: ${gutter.M};
      max-width: 93vw;
      width: 93vw;
    }

    > button {
      width: 80vw;
    }
  }
`;

/**
 * Description.
 *
 * @class
 */
const Banner = ({ background, color }) => {
  const [colorState, setColorState] = React.useState(color);

  React.useEffect(() => {
    let textColor = (isEmpty(colorState)) ? Color(background).negate().hex() : colorState;
    setColorState(textColor);
  }, [background, colorState, setColorState]);

  return (
    <StyledBanner background={background} color={colorState}>
      <section>
        <h1>Get Involved</h1>
        <p className='font-size--4'>Sign up for our email newsletter and get the latest info on events, fundraisers and ways to make an impact.</p>
      </section>

      <Link className='link--reset' to='/signup'>
        <Button
          background={background}
          color={colorState}
          buttonStyle='secondary'
          variant='outlined'
        >Sign&nbsp;Up</Button>
      </Link>
    </StyledBanner>
  );
};

Banner.defaultProps = {
  background: vowaidColors.red[55],
  color: vowaidColors.grayscale[95],
};

Banner.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
};

export default Banner;
