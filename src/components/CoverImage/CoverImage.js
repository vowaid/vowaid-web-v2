import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../Image/Image';

import { pxToEm } from '../../styles/utils';

const ImageContainer = styled.div`
  height: ${(props) => (props.imageHeight)};
  min-height: ${pxToEm(500)};
  overflow: hidden;
  position: absolute;
  width: 100vw;
  z-index: -1;
`;

const StyledImg = styled(({ imageHeight, ...rest }) => <Image {...rest} />)`
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

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      // higher number for more zoom
      const scale = window.scrollY * .0004 + 1;

      document.querySelector('.image--container').style.transform = `scale(${scale})`;
    });
  });

  return (
    <ImageContainer
      className='image--container'
      imageHeight={imageHeight}
    >
      <StyledImg
        alt={alt}
        imageHeight={imageHeight}
        loading={loading}
        src={src}
        skeleton={{ height: 500, width: '100%' }}
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
