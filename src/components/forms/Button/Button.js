import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

const SiteButton = ({ className, ...others }) => {
  const setClassName = () => {
    const toolbarClass = 'MuiToolbar-regular';
    let newClassName = className || '';

    if (!newClassName.includes(toolbarClass)) {
      newClassName += toolbarClass;
    }

    return newClassName;
  };

  return (
    <Button className={setClassName()} {...others} />
  );
};

SiteButton.propTypes = {
  className: PropTypes.string,
};

SiteButton.defaultProps = {
  classNAme: 'MuiToolbar-regular',
};

export default SiteButton;