import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from '@material-ui/lab/Skeleton';
import Img from 'react-image';

const Image = ({ skeleton, ...rest }) => (
  <Img
    {...rest}
    loader={<Skeleton type='rect' height={skeleton.height} width={skeleton.width} />}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string.isRequired,
  skeleton: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  height: undefined,
  skeleton: {
    height: 300,
    width: 300,
  },
  width: undefined,
};

export default Image;
