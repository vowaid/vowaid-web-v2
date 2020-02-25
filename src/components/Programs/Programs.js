import React from 'react';
import styled from 'styled-components';

import { useTheme } from '@material-ui/core/styles';
import { Button, H2, Link } from '../index';

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
          variant='contained'
          color='secondary'
          component={Link}
          to='/services/twc'
        >Transitioning Warrior Club</Button>
      </li>

      <li>
        <H2 variant='h4'>Domestic Violence Recovery Support</H2>

        <Button
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
    justify-content: space-between;

    > li {
      background: ${(mode === 'light') ? vowaidColors.grayscale[75] : vowaidColors.grayscale[30]};
      color: ${vowaidColors.fontColor[mode]};
      padding: ${gutter.XXL} ${gutter.XL};
      text-align: center;
      width: 48%;

      a {
        margin: ${gutter.L} auto 0;
        padding: ${gutter.XS} ${gutter.L};
      }
    }

    @media only screen and (max-width: 800px) {
      flex-wrap: wrap;

      > li {
        margin-bottom: ${gutter.M};
        width: 100%;
      }
    }
  `}
`;

export default Programs;
