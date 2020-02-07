import React from 'react';
import styled from 'styled-components';

import { Button, useMediaQuery } from '@material-ui/core';
import { H1, P } from '../../Typography/Typography';
import Link from '../../Link/Link';

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
          <H1>Our Mission</H1>
          <P variant='h5'>The Veterans of War Aid Foundation (VOWAID) creates, unites, and supports businesses that fight for American combat veterans and uses contacts and revenues to deliver targeted assistance to American Heroes in need.</P>
        </Mission>

        <ButtonGroup>
          <Button
            className='MuiToolbar-regular'
            color={(prefersDarkMode) ? 'default' : 'primary'}
            variant='outlined'
            component={StyledLink}
            to='/about'
          >Learn&nbsp;More</Button>

          <Button
            className='MuiToolbar-regular'
            color='secondary'
            variant='contained'
            component={StyledLink}
            to='/donate'
          >Donate</Button>
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

  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 700;
  width: 40%;
  ${createTransitionForProperties(['background', 'box-shadow', 'margin', 'width'])};

  @media only screen and (max-width: 1000px) {
    margin: 0 5%;
    width: 85%;

    &:first-child {
      margin-bottom: ${gutter.M};
    }
  }
`;

export default LandingHero;
