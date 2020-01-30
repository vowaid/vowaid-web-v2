import React from 'react';
import styled from 'styled-components';

import { Button, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
        <Typography variant='h4' component='h2'>Transition Assistance Resources</Typography>

        <Link className='link--reset' to='/services/twc'>
          <Button
            className='MuiToolbar-regular'
            variant='contained'
            color='secondary'
          >Transitioning Warrior Club</Button>
        </Link>
      </li>

      <li>
        <Typography variant='h4' component='h2'>Domestic Violence Recovery Support</Typography>

        <Link className='link--reset' to='/services/swc'>
          <Button
            className='MuiToolbar-regular'
            variant='contained'
            color='primary'
          >Survivor Warrior Club</Button>
        </Link>
      </li>
    </ProgramsList>
  );
};

const ProgramsList = styled.ul`
  ${({ mode }) => `
    margin: ${gutter.XXL} 0;
    display: flex;
    justify-content: space-around;

    > li {
      background: ${(mode === 'light') ? vowaidColors.grayscale[75] : vowaidColors.grayscale[30]};
      color: ${vowaidColors.fontColor[mode]};
      padding: ${gutter.XXL};
      text-align: center;
      width: 35vw;

      button {
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

        button {
          padding: ${gutter.M} ${gutter.XL};
        }
      }
    }
  `}
`;

export default Programs;
