import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';
import { withStyles } from '@material-ui/core/styles';

import { Button, Typography, useMediaQuery } from '@material-ui/core';
import Link from '../../Link/Link';

import { isEmpty } from 'lodash';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

const StyledBanner = styled.article`
  align-items: center;
  background: ${(props) => (!props.prefersDarkMode) ? props.background : Color(props.background).darken(0.05).hex()};
  color: ${(props) => (props.color)};
  display: flex;
  justify-content: space-between;
  padding: ${gutter.M} 15vw;
  ${createTransitionForProperties(['padding'])};

  > section {
    max-width: 34.75vw;
  }

  a {
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

    > a {
      width: 80vw;
    }
  }
`;

const ColoredButton = withStyles((theme) => {
  const color = theme.palette.getContrastText(vowaidColors.red.default);

  return {
    root: {
      color,
      borderColor: color,
    },
  };
})(Button);

/**
 * Description.
 *
 * @class
 */
const Banner = ({ background, color }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorState, setColorState] = React.useState(color);

  React.useEffect(() => {
    let textColor = (isEmpty(colorState)) ? Color(background).negate().hex() : colorState;
    setColorState(textColor);
  }, [background, colorState, setColorState]);

  return (
    <StyledBanner background={background} color={colorState} prefersDarkMode={prefersDarkMode}>
      <section>
        <Typography variant='h3' component='h1'>Get Involved</Typography>
        <Typography variant='h5' component='p'>Sign up for our email newsletter and get the latest info on events, fundraisers and ways to make an impact.</Typography>
      </section>

      <ColoredButton
        className='MuiToolbar-regular'
        variant='outlined'
        component={Link}
        to='/signup'
      >Sign&nbsp;Up</ColoredButton>
    </StyledBanner>
  );
};

Banner.defaultProps = {
  background: vowaidColors.red[50],
  color: vowaidColors.grayscale[95],
};

Banner.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
};

export default Banner;
