import React from 'react';
import styled from 'styled-components';

import { Button, Typography, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import CoverImage from '../../CoverImage/CoverImage';

import Image from '../../../assets/images/covers/DSC01178.jpg';

/**
 * Description.
 */
const LandingHero = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <StyledHero>
      <CoverImage
        alt='Desert Ops'
        imageHeight={sectionHeight}
        src={Image}
      />

      <RightPanel prefersDarkMode={prefersDarkMode}>
        <Mission>
          <Typography variant='h2' component='h1'>Our Mission</Typography>
          <Typography variant='h5' component='p'>The Veterans of War Aid Foundation (VOWAID) creates, unites, and supports businesses that fight for American combat veterans and uses contacts and revenues to deliver targeted assistance to American Heroes in need.</Typography>
        </Mission>

        <ButtonGroup>
          <StyledLink className='link--reset' to='/about'>
            <Button
              className='MuiToolbar-regular'
              color={(prefersDarkMode) ? 'default' : 'primary'}
              variant='outlined'
            >Learn&nbsp;More</Button>
          </StyledLink>

          <StyledLink className='link--reset' to='/donate'>
            <Button
              className='MuiToolbar-regular'
              color='secondary'
              variant='contained'
            >Donate</Button>
          </StyledLink>
        </ButtonGroup>
      </RightPanel>
    </StyledHero>
  );
};

const sectionHeight = '50vh';

const StyledHero = styled.article`
  height: ${sectionHeight};
  min-height: ${pxToEm(500)};
  overflow: hidden;
  position: relative;
`;

const RightPanel = styled.section`
  ${({ prefersDarkMode }) => `
    background: ${(!prefersDarkMode) ? 'rgba(220, 220, 220, 0.7)' : 'rgba(30, 30, 30, 0.7)'};
    box-sizing: border-box;
    color: ${(!prefersDarkMode) ? vowaidColors.grayscale[10] : vowaidColors.grayscale[90]};
    display: flex;
    flex-direction: column;
    height: ${sectionHeight};
    min-height: ${pxToEm(500)};
    justify-content: center;
    padding: 0 ${gutter.XXL};
    position: absolute;
    right: 0;
    top: 0;
    width: 41.66667vw;
    z-index: 1;
    ${createTransitionForProperties(['width'])};

    @media only screen and (max-width: 1000px) {
      width: 60vw;
    }

    @media only screen and (max-width: 800px) {
      width: 80vw;
    }

    @media only screen and (max-width: 600px) {
      width: 100vw;
    }
  `};
`;

const Mission = styled.div`
  margin-bottom: ${gutter.XXL};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-weight: 700;
    width: 100%;
    ${createTransitionForProperties(['background', 'box-shadow', 'margin', 'width'])};
  }

  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;

    button {
      margin: 0 5%;

      &:first-child {
        margin-bottom: ${gutter.M};
      }
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 40%;

  @media only screen and (max-width: 1000px) {
    width: 85%;
  }
`;

export default LandingHero;
