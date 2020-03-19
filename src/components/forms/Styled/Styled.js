import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { gutter } from '../../../styles/utils';

const useStyles = makeStyles(theme => {
  const paletteColor = (theme.palette.type === 'dark') ? 'light' : 'dark';

  return {
    form: {
      width: '100%',
    },
    feedback: {
      color: theme.palette.error[paletteColor],
      display: 'inline-block',
      marginBottom: '0',
    },
    inputGroup: {
      marginBottom: gutter.L,

      '& > *': {
        width: '100%',
      },
    },
  };
});

const Form = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.form} {...props} />
  );
};

const InputGroup = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.inputGroup} {...props} />
  );
};

const Feedback = (props) => {
  const classes = useStyles();

  return (
    <small className={classes.feedback} {...props} />
  );
};

export {
  Form,
  Feedback,
  InputGroup,
};
