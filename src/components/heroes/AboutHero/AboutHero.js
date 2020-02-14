import React from 'react';
import styled from 'styled-components';
import { styled as muiStyled } from '@material-ui/core/styles';

import { H1, P, CoverImage } from '../../index';

import { gutter, pxToEm } from '../../../styles/utils';
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
        <header>
          <H1>Who We Are</H1>
        </header>

        <P variant='h5'>A nonprofit founded by U.S. Service Members. We understand the needs of transitioning warriors. Dedicated to helping socially responsible businesses team up with combat veterans in order to promote stability, growth, and self-empowerment.</P>

        <P variant='h5'>We create opportunities for assistance and we maximize these opportunities at every step of the process.</P>
      </Mission>
    </Overlay>
  </StyledHero>
);

const StyledHero = muiStyled('article')({
  height: sectionHeight,
  overflow: 'hidden',
  position: 'relative',
});

const Overlay = muiStyled('section')({
  background: 'rgba(0, 0, 0, 0.7)',
  boxSizing: 'border-box',
  color: vowaidColors.grayscale[90],
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  padding: '0 15vw',
  position: 'absolute',
  right: '0',
  top: '0',
  width: '100%',
  zIndex: '1',
  transition: 'width 0.3s ease',
});

const Mission = styled('div')`
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
