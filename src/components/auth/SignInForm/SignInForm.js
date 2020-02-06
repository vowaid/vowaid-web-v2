import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import noop from 'lodash/noop';

import { Formik } from 'formik';
import { Button, Typography } from '@material-ui/core';
import Link from '../../Link/Link';

import { createTransitionForProperties, gutter, hexToRgb, pxToEm } from '../../../styles/util';
import { vowaidColors } from '../../../styles/colors';

/**
 * Description.
 */
const SignInForm = (props) => {
  const { isVisible, onClose } = props;

  /**
   * Description.
   *
   * @param {} values
   * @param {} actions
   */
  const onFormSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={onFormSubmit}
        render={(props) => (
          <Form onSubmit={props.handleSubmit}>
            <header>
              <Typography component='h1' variant='h2'>Sign In</Typography>
            </header>

            <section>
              <UsernameGroup className='input-group'>
                <input
                  type='text'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.username}
                  name='username'
                  placeholder='email / username'
                />
                {props.errors.username && <div id="feedback">{props.errors.username}</div>}
              </UsernameGroup>

              <PasswordGroup className='input-group'>
                <input
                  type='password'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name='password'
                  placeholder='password'
                />
                {props.errors.password && <div id="feedback">{props.errors.password}</div>}

                <a href=''>Forgot Password</a>
              </PasswordGroup>
            </section>

            <Button
              color='primary'
              variant='contained'
              type='submit'
            >
              Sign In
            </Button>
          </Form>
        )}
      />

      <SignUp>
        <Typography component='p' variant='body1'>Not a member?</Typography>

        <Link className='link--reset' to='/signup'>
          <Button
            color='primary'
            variant='outlined'
          >Sign&nbsp;Up</Button>
        </Link>
      </SignUp>
    </>
  );
};

SignInForm.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

SignInForm.defaultProps = {
  isVisible: false,
  onClose: _.noop,
};

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${gutter.XXL};
  padding-bottom: ${gutter.L};

  > * {
    width: 70%;
  }

  header {
    margin-bottom: ${gutter.XXL};
  }

  .input-group {
    margin-bottom: ${gutter.M};
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${vowaidColors.black};
    box-shadow: inset 0 0 0 0 rgba(${hexToRgb(vowaidColors.blue[95])}, 0);
    height: ${pxToEm(45)};
    outline: none;
    padding: ${gutter.XS} ${gutter.M};
    position: relative;
    width: 100%;
    ${createTransitionForProperties(['border-bottom', 'padding'])};

    &:focus {
      border-bottom: 3px solid ${vowaidColors.blue[95]};
      padding-bottom: ${pxToEm(8)};
    }
  }
`;

const UsernameGroup = styled.div``;
const PasswordGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  a {
    display: inline-block;
    margin: ${gutter.XS} 0 0 auto;
  }
`;

const SignUp = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: ${gutter.XXL};

  button {
    margin-top: ${gutter.S};
    padding-bottom: ${gutter.S};
    padding-top: ${gutter.S};
  }
`;
