import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 700,
    letterSpacing: 1.25,
    textTransform: 'capitalize',
  },
}));

const SiteButton = ({ className, ...others }) => {
  const classes = useStyles();

  const setButtonClassName = () => {
    const toolbarClass = 'MuiToolbar-regular';
    let buttonClassName = classes.root;

    // Add any user specified classes
    if (className) {
      buttonClassName += ` ${className}`;
    }

    // Ensure all buttons have the toolbar class (match height)
    if (!buttonClassName.includes(toolbarClass)) {
      buttonClassName += ` ${toolbarClass} `;
    }

    return buttonClassName.trim();
  };

  return (
    <Button className={setButtonClassName()} {...others} />
  );
};

SiteButton.propTypes = {
  className: PropTypes.string,
};

SiteButton.defaultProps = {
  className: 'MuiToolbar-regular',
};

export default SiteButton;
