import React from 'react';
import styled from 'styled-components';

import { H1, P } from '../../Typography/Typography';
import CoverImage from '../../CoverImage/CoverImage';

import { createTransitionForProperties, gutter, hexToRgb, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import Image from '../../../assets/images/covers/shaking-hands.jpg';

const sectionHeight = pxToEm(300);

/**
 * Description.
 */
const PartnersHero = () => (
  <StyledHero>
    <CoverImage
      alt='Partnership'
      imageHeight={sectionHeight}
      src={Image}
    />

    <Overlay>
      <Mission>
        <H1>Our Partners</H1>
        <P variant='h4'>Our partners are our lifeblood.</P>
      </Mission>
    </Overlay>
  </StyledHero>
);

const StyledHero = styled.article`
  height: ${sectionHeight};
  overflow: hidden;
  position: relative;
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

  p {
    margin-bottom: 2ex;
  }

  @media only screen and (max-width: 1000px) {
    max-width: 70%;
  }

  @media only screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

export default PartnersHero;
