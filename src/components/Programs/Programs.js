import React from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { H2 } from '../Typography/Typography';
import Link from '../Link/Link';

import { gutter } from '../../styles/utils';
import { vowaidColors } from '../../styles/colors';

/**
 * Description.
 */
const Programs = () => {
  const theme = useTheme();
  const mode = theme.palette.type;

  return (
    <ProgramsList mode={mode}>
      <li>
        <H2 variant='h4'>Transition Assistance Resources</H2>

        <Button
          className='MuiToolbar-regular'
          variant='contained'
          color='secondary'
          component={Link}
          to='/services/twc'
        >Transitioning Warrior Club</Button>
      </li>

      <li>
        <H2 variant='h4'>Domestic Violence Recovery Support</H2>

        <Button
          className='MuiToolbar-regular'
          variant='contained'
          color='primary'
          component={Link}
          to='/services/swc'
        >Survivor Warrior Club</Button>
      </li>
    </ProgramsList>
  );
};

const ProgramsList = styled.ul`
  ${({ mode }) => `
    padding: ${gutter.XXL} 0;
    display: flex;
    justify-content: space-around;

    > li {
      background: ${(mode === 'light') ? vowaidColors.grayscale[75] : vowaidColors.grayscale[30]};
      color: ${vowaidColors.fontColor[mode]};
      padding: ${gutter.XXL};
      text-align: center;
      width: 35vw;

      a {
        margin: ${gutter.L} auto 0;
        padding: ${gutter.XS} ${gutter.L};
      }
    }

    @media only screen and (max-width: 1000px) {
      flex-wrap: wrap;

      > div {
        width: 60vw;

        &:not(:last-child) {
          margin-bottom: ${gutter.XL};
        }
      }
    }

    @media only screen and (max-width: 800px) {
      > div {
        width: 90vw;

        a {
          padding: ${gutter.M} ${gutter.XL};
        }
      }
    }
  `}
`;

export default Programs;
