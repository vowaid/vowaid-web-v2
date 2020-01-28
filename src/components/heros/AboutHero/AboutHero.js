import React from 'react';
import styled from 'styled-components';

import CoverImage from '../../CoverImage/CoverImage';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import Image from '../../../assets/images/covers/flags.jpg';

const sectionHeight = pxToEm(500);

/**
 * Description.
 *
 * @param {} props
 */
const Hero = () => (
  <StyledHero>
    <CoverImage
      alt='American Flags'
      imageHeight={sectionHeight}
      src={Image}
    />

    <Overlay>
      <Mission>
        <h1>Who We Are</h1>

        <p className='font-size--3'>A nonprofit founded by U.S. Service Members. We understand the needs of transitioning warriors. Dedicated to helping socially responsible businesses team up with combat veterans in order to promote stability, growth, and self-empowerment.</p>

        <p className='font-size--3'>We create opportunities for assistance and we maximize these opportunities at every step of the process.</p>
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
  background: rgba(0, 0, 0, 0.7s);
  box-sizing: border-box;
  color: ${vowaidColors.grayscale[100]};
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

export default Hero;
