import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pxToEm } from '../../styles/utils';

/**
 * Description.
 *
 * @param {} props.alt
 * @param {} props.imageHeight
 * @param {} props.src
 */
const CoverImage = ({ alt, imageHeight, src }) => (
  <ImageContainer
    className='image--container'
    imageHeight={imageHeight}
  >
    <img
      alt={alt}
      className='image'
      src={src}
    />
  </ImageContainer>
);

CoverImage.defaultProps = {
  alt: '',
  imageHeight: pxToEm(600),
  src: '',
};

CoverImage.propTypes = {
  alt: PropTypes.string,
  imageHeight: PropTypes.string,
  src: PropTypes.string,
};

const ImageContainer = styled.div`
  height: ${(props) => (props.imageHeight)};
  overflow: hidden;
  position: absolute;
  width: 100vw;
  z-index: -1;

  .image {
    height: ${(props) => (props.imageHeight)};
    object-fit: cover;
    width: 100vw;
  }
`;

export default CoverImage;
