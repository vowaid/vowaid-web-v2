import React from 'react';
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';
import {  InputAdornment, IconButton, Input } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Feedback, InputGroup } from '../Styled/Styled';

const Password = ({ showError, ...others }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  /**
   * Description.
   *
   * @prop {object} event Description.
   */
  const handleClickShowPassword = (event) => {
    setShowPassword(!showPassword);
  };

  /**
   * Description.
   *
   * @prop {object} event Description.
   */
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <InputGroup className='input-group'>
      <Field
        {...others}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        type={(showPassword) ? 'text' : 'password'}
      />
      {(showError) && <Feedback><ErrorMessage name='password' /></Feedback>}
    </InputGroup>
  );
};

Password.propTypes = {
  component: PropTypes.elementType,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
}

Password.defaultProps = {
  component: Input,
  name: 'Password',
  id: 'password',
  label: 'Password',
  placeholder: 'Password',
  required: false,
  type: 'password',
};

export default Password;
