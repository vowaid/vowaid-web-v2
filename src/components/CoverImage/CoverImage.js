import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pxToEm } from '../../styles/utils';

const ImageContainer = styled.div`
  height: ${(props) => (props.imageHeight)};
  min-height: ${pxToEm(500)};
  overflow: hidden;
  position: absolute;
  width: 100vw;
  z-index: -1;
`;

const Img = styled.img`
  height: ${(props) => (props.imageHeight)};
  min-height: ${pxToEm(500)};
  object-fit: cover;
  width: 100vw;
`;

/**
 * Description.
 *
 * @param {} props.alt
 * @param {} props.imageHeight
 * @param {} props.src
 */
const CoverImage = (props) => {
  const { alt, imageHeight, loading, src, ...others } = props;

  return (
    <ImageContainer
      className='image--container'
      imageHeight={imageHeight}
    >
      <Img
        alt={alt}
        imageHeight={imageHeight}
        loading={loading}
        src={src}
        {...others}
      />
    </ImageContainer>
  );
};

CoverImage.defaultProps = {
  alt: '',
  imageHeight: pxToEm(600),
  loading: 'eager',
  name: '',
  src: '',
};

CoverImage.propTypes = {
  alt: PropTypes.string,
  imageHeight: PropTypes.string,
  loading: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
};

export default CoverImage;
