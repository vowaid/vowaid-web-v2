import React from 'react';
import styled from 'styled-components';

import { Typography } from '@material-ui/core';
import CoverImage from '../../CoverImage/CoverImage';

import { createTransitionForProperties, gutter, hexToRgb, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import Image from '../../../assets/images/covers/DSC_0918.jpg';

const sectionHeight = pxToEm(400);

/**
 * Description.
 */
const ServicesHero = () => (
  <StyledHero>
    <CoverImage
      alt='Mando Fun Day Brief'
      imageHeight={sectionHeight}
      src={Image}
    />

    <Overlay>
      <Mission>
        <Typography variant='h2' component='h1'>Veteran Services</Typography>
        <Typography variant='h4' component='p'>Recover. Transition. Thrive. We focus on innovative and effective programs that make a difference. </Typography>
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

  @media only screen and (max-width: 1000px) {
    max-width: 70%;
  }

  @media only screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

export default ServicesHero;
