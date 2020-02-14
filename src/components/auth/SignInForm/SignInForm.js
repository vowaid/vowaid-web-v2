import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

import { Formik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { H1, P } from '../../Typography/Typography';
import Link from '../../Link/Link';
import * as Yup from 'yup';

import { gutter } from '../../../styles/utils';

const initialValues = {
  username: '',
  password: '',
};

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short')
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('Required'),
});

/**
 * Description.
 */
const SignInForm = (props) => {
  const [isSubmitting] = React.useState(false);

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

  /**
   * Description.
   *
   * @param {} values
   */
  const validateForm = (values) => {
    if (isSubmitting) {
      let errors = {};
      const keys = Object.keys(initialValues);

      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];

        if (isEmpty(values[key])) {
          errors[key] = 'Required'
        }
      }

      if (!errors.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    }
  }

  return (
    <>
      {console.log(props)}
      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}

        validationSchema={ContactSchema}
        validate={validateForm}
        validateOnBlur={false}
        validateOnChange={false}

        render={(props) => {
          const usernameError = (!isEmpty(props.touched) && props.touched.username && props.values.username === '');
          const passwordError = (!isEmpty(props.touched) && props.touched.password && props.values.password === '');

          // TODO: With wifi look up validation on Formik
          console.log(props);
          console.log('username', usernameError, props.touched.username);
          console.log('password', passwordError);

          return (
            <Form onSubmit={props.handleSubmit}>
              <header>
                <H1>Sign In</H1>
              </header>

              <section>
                <UsernameGroup className='input-group'>
                  <TextField
                    type='text'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.username}
                    name='username'
                    placeholder='email / username'
                    label='email / username'
                    error={usernameError}
                    helperText={props.errors.username}
                  />
                  {props.errors.username && <div id="feedback">{props.errors.username}</div>}
                </UsernameGroup>

                <PasswordGroup className='input-group'>
                  <TextField
                    type='password'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    name='password'
                    placeholder='password'
                    label='password'
                    error={passwordError}
                    helperText={props.errors.password}
                  />
                  {props.errors.password && <div id="feedback">{props.errors.password}</div>}

                  <Link to='/auth/help'>Forgot Password</Link>
                </PasswordGroup>
              </section>

              <Button
                className='MuiToolbar-regular'
                color='primary'
                disabled={isSubmitting}
                variant='contained'
                type='submit'
              >
                Sign In
              </Button>
            </Form>
          )
        }}
      />

      <SignUp>
        <P>Not a member?</P>

        <Button
          className='MuiToolbar-regular'
          color='primary'
          variant='outlined'
          component={Link}
          to='/signup'
        >Sign&nbsp;Up</Button>
      </SignUp>
    </>
  );
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

  a {
    margin-top: ${gutter.S};
  }
`;

export default SignInForm;
