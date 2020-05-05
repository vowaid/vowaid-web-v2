import React from 'react';
import styled from 'styled-components';

import { H1, H2, P, CoverImage } from '../../index';

import { transformMission } from '../utils/heroUtils';
import { createTransitionForProperties, gutter, pxToEm, hexToRgb } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import Image from '../../../assets/images/covers/DSC2669.jpg';

const sectionHeight = pxToEm(300);

/**
 * Description.
 */
const Hero = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', transformMission);

    return window.removeEventListener('scroll', transformMission);
  });

  return (
    <StyledHero>
      <CoverImage
        alt='Lisa Briefs the Oscars'
        imageHeight={sectionHeight}
        src={Image}
      />

      <Overlay className="hero--overlay">
        <Mission className="hero--mission">
          <H1>Donate</H1>
          <H2 paragraph>Change lives with your gift!</H2>

          <P>Your donation supports our mission to help Veterans in need.</P>
        </Mission>
      </Overlay>
    </StyledHero>
  );
};

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
