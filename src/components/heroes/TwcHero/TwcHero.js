import React from 'react';
import styled from 'styled-components';

import { H1, P, CoverImage } from '../../index';

import { createTransitionForProperties, gutter, pxToEm, hexToRgb } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import Image from '../../../assets/images/covers/veterans.jpg';

const sectionHeight = pxToEm(400);

/**
 * Description.
 */
const Hero = () => (
  <StyledHero>
    <CoverImage
      alt='Mando Fun Day Brief'
      imageHeight={sectionHeight}
      src={Image}
    />

    <Overlay>
      <Mission>
        <H1>Transitioning Warrior Club</H1>
        <P className='font-size--3'>Recover. Transition. Thrive. We focus on innovative and effective programs that make a difference.</P>
      </Mission>
    </Overlay>
  </StyledHero>
);

const StyledHero = styled.article`
  height: ${sectionHeight};
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const Overlay = styled.section`
  background: rgba(${hexToRgb(vowaidColors.black)}, 0.7);
  box-sizing: border-box;
  color: ${vowaidColors.white};
  display: flex;
  flex-direction: column;
  height: ${sectionHeight};
  justify-content: center;
  padding: 0 15vw;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  ${createTransitionForProperties(['width'])};
`;

const Mission = styled.div`
  max-width: 50%;

  h1 {
    margin-bottom: ${gutter.XXL};
  }

  @media only screen and (max-width: 1000px) {
    max-width: 70%;
  }

  @media only screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

export default Hero;
