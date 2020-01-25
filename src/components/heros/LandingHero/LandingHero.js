import React from 'react';
import styled from 'styled-components';
import Color from 'color';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { createTransitionForProperties, gutter } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import CoverImage from '../../CoverImage/CoverImage';

import Image from '../../../assets/images/covers/DSC01178.jpg';

const hexToRgb = (hex) => (
  Color(hex).rgb()
);

console.log(hexToRgb('#FFF'));

/**
 * Description.
 */
const LandingHero = () => (
  <StyledHero>
    <CoverImage
      alt='Desert Ops'
      imageHeight={sectionHeight}
      src={Image}
    />

    <RightPanel>
      <Mission>
        <h1>Our Mission</h1>
        <p className='font-size--4'>The Veterans of War Aid Foundation (VOWAID) creates, unites, and supports businesses that fight for American combat veterans and uses contacts and revenues to deliver targeted assistance to American Heroes in need.</p>
      </Mission>

      <ButtonGroup>
        <Link className='link--reset' to='/about'>
          <Button
            className='MuiToolbar-regular'
            color={vowaidColors.blue['50']}
            buttonStyle='secondary'
          >Learn&nbsp;More</Button>
        </Link>

        <Link className='link--reset' to='/donate'>
        <Button className='MuiToolbar-regular' color='secondary' variant='contained'>Donate</Button>
        </Link>
      </ButtonGroup>
    </RightPanel>
  </StyledHero>
);

const sectionHeight = '50vh';

const StyledHero = styled.article`
  min-height: ${sectionHeight};
  overflow: hidden;
  position: relative;
`;

const RightPanel = styled.section`
  background: rgba(220, 220, 220, 0.7);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: ${sectionHeight};
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
`;

const Mission = styled.div`
  margin-bottom: ${gutter.XXL};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-weight: 700;
    max-width: 45%;
    ${createTransitionForProperties(['background', 'box-shadow', 'margin', 'width'])};
  }

  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;

    button {
      margin: 0 5%;
      max-width: 90%;
      width: 90%;

      &:first-child {
        margin-bottom: ${gutter.M};
      }
    }
  }
`;

export default LandingHero;
