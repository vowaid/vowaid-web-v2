import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { makeStyles } from '@material-ui/core/styles';

import { Formik, Field, ErrorMessage } from 'formik';
import { TextField } from '@material-ui/core';
import { Button, H1, P, Link, Wrapper } from '../../index';
import { Feedback, InputGroup } from '../../forms/Styled/Styled';

import Password from '../../forms/Password/Password';

import { gutter } from '../../../styles/utils';

import SignUpSchema from '../../../utils/schemas/signUpSchema';

const initialValues = {
  username: '',
  password: '',
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: gutter.XXL,
    paddingTop: gutter.XXL,

    '& a': {
      color: 'inherit',
    }
  },
  form: {
    marginTop: gutter.L,
    width: '100%',
  },
}));

/**
 * General Modal container component for the application.
 *
 * @class
 */
const SignInForm = (props) => {
  const classes = useStyles();

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
  };

  return (
    <Wrapper className={classes.root}>
      <header>
        <H1 paragraph>Sign In</H1>

        <P>Not a member? <Link to='/signup' underline='hover'>Sign Up</Link></P>
      </header>

      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        validate={validateForm}
        validateOnBlur
        enableReinitialize
        validateOnChange={false}
        onSubmit={onFormSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValidating,
          setFieldTouched,
          setFieldValue,
          submitForm,
          touched,
          values,
        }) => (
          <form className={classes.form} onSubmit={props.handleSubmit}>
            <InputGroup className='input-group'>
              <Field
                component={TextField}
                name='Username'
                id='username'
                onBlur={handleBlur}
                onChange={handleChange}
                label='Username'
                placeholder='Username'
                required
                type='text'
                value={values.username}
              />
              {(touched.username && errors.username) && <Feedback><ErrorMessage name='username' /></Feedback>}
            </InputGroup>

            <Password
              onBlur={handleBlur}
              onChange={handleChange}
              required
              showError={(touched.password && errors.password)}
              value={values.password}
            />

            <Button
              color='primary'
              variant='contained'
              type='submit'
              component={Link}
              to='/signin'
            >
              Sign In
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SignInForm;
