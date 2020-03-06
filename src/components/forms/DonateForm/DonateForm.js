import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

import { Formik, Field, ErrorMessage } from 'formik';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import { Button, P, Link, Select, Wrapper } from '../../index';
import { Feedback, InputGroup } from '../../forms/Styled/Styled';

import DatePicker from '../../forms/DatePicker/DatePicker';
import Password from '../../forms/Password/Password';

import { gutter } from '../../../styles/utils';
// import { vowaidColors } from '../../../styles/colors';

import { branchFormOptions, buildRankFormOptions } from '../../../utils/enums/militaryEnums';
// import { Options } from '../../../utils/enums/dateEnums';

import SignUpSchema from '../../../utils/schemas/signUpSchema';

const initialValues = {
  donation: '',
  frequency: '',

  firstName: '',
  lastName: '',
  email: '',
  phone: '',

  comment: '',

  cardFirstName: '',
  cardLastName: '',
  cardNumber: '',
  country: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',

  notRobot: false,
  processingFee: false,
};

const Form = styled.form`
  padding: ${gutter.XXL} 0;
  width: 100%;

  fieldset {
    padding: 0;

    legend {
      padding-top: ${gutter.L};
    }
  }
`;

/**
 * General Modal container component for the application.
 *
 * @class
 */
const DonateForm = (props) => {
  const [qualChecked, setQualChecked] = React.useState([]);

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
  }

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
  }

  /**
   * Description.
   *
   * @param {number} value Description.
   */
  const handleToggle = (value) => (event) => {
    event.stopPropagation();
    event.preventDefault();

    const currentIndex = qualChecked.indexOf(value);
    const newChecked = [...qualChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setQualChecked(newChecked);
  };

  return (
    <Wrapper>
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
          <Form onSubmit={props.handleSubmit}>
            <fieldset>
              <legend>Donation Details</legend>

              <InputGroup>
                <Field
                  component={TextField}
                  name='donation'
                  id='donation'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Donation'
                  placeholder='Donation'
                  required
                  type='text'
                  value={values.firstName}
                />
                {(touched.donation && errors.donation) && <Feedback><ErrorMessage name='donation' /></Feedback>}
              </InputGroup>

              <InputGroup>
                <Field
                  component={TextField}
                  name='frequency'
                  id='frequency'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Frequency'
                  placeholder='Frequency'
                  required
                  type='text'
                  value={values.firstName}
                />
                {(touched.frequency && errors.frequency) && <Feedback><ErrorMessage name='frequency' /></Feedback>}
              </InputGroup>
            </fieldset>

            <fieldset>
              <legend>Personal Info</legend>
              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='First Name'
                  id='firstName'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='First Name'
                  placeholder='First Name'
                  required
                  type='text'
                  value={values.firstName}
                />
                {(touched.firstName && errors.firstName) && <Feedback><ErrorMessage name='firstName' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Last Name'
                  id='lastName'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Last Name'
                  placeholder='Last Name'
                  required
                  type='text'
                  value={values.lastName}
                />
                {(touched.lastName && errors.lastName) && <Feedback><ErrorMessage name='lastName' /></Feedback>}
              </InputGroup>
            </fieldset>

            <fieldset>
              <legend>Contact</legend>
              <InputGroup>
                <Field
                  component={TextField}
                  name='email'
                  id='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Email'
                  placeholder='email'
                  required
                  type='email'
                  value={values.email}
                />
                {(touched.email && errors.email) && <Feedback><ErrorMessage name='email' /></Feedback>}
              </InputGroup>

              <InputGroup>
                <Field
                  component={TextField}
                  name='phone'
                  id='phone'
                  onChange={handleChange}
                  label='Phone'
                  placeholder='phone'
                  type='tel'
                  value={values.phone}
                />
                {(touched.phone && errors.phone) && <Feedback><ErrorMessage name='phone' /></Feedback>}
              </InputGroup>
            </fieldset>

            <fieldset>
              <legend>Payment Information</legend>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='First Name'
                  id='cardFirstName'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='First Name'
                  placeholder='First Name'
                  required
                  type='text'
                  value={values.cardFirstName}
                />
                {(touched.cardFirstName && errors.cardFirstName) && <Feedback><ErrorMessage name='cardFirstName' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Last Name'
                  id='cardLastName'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Last Name'
                  placeholder='Last Name'
                  required
                  type='text'
                  value={values.cardLastName}
                />
                {(touched.cardLastName && errors.cardLastName) && <Feedback><ErrorMessage name='cardLastName' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Card Number'
                  id='cardNumber'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Card Number'
                  placeholder='Card Number'
                  required
                  type='text'
                  value={values.cardNumber}
                />
                {(touched.cardNumber && errors.cardNumber) && <Feedback><ErrorMessage name='cardNumber' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Card Number'
                  id='cardNumber'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Card Number'
                  placeholder='Card Number'
                  required
                  type='text'
                  value={values.cardNumber}
                />
                {(touched.cardNumber && errors.cardNumber) && <Feedback><ErrorMessage name='cardNumber' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Card Number'
                  id='cardNumber'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Card Number'
                  placeholder='Card Number'
                  required
                  type='text'
                  value={values.cardNumber}
                />
                {(touched.cardNumber && errors.cardNumber) && <Feedback><ErrorMessage name='cardNumber' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Card Number'
                  id='cardNumber'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Card Number'
                  placeholder='Card Number'
                  required
                  type='text'
                  value={values.cardNumber}
                />
                {(touched.cardNumber && errors.cardNumber) && <Feedback><ErrorMessage name='cardNumber' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Card Number'
                  id='cardNumber'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Card Number'
                  placeholder='Card Number'
                  required
                  type='text'
                  value={values.cardNumber}
                />
                {(touched.cardNumber && errors.cardNumber) && <Feedback><ErrorMessage name='cardNumber' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Card Number'
                  id='cardNumber'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Card Number'
                  placeholder='Card Number'
                  required
                  type='text'
                  value={values.cardNumber}
                />
                {(touched.cardNumber && errors.cardNumber) && <Feedback><ErrorMessage name='cardNumber' /></Feedback>}
              </InputGroup>

              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='Card Number'
                  id='cardNumber'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Card Number'
                  placeholder='Card Number'
                  required
                  type='text'
                  value={values.cardNumber}
                />
                {(touched.cardNumber && errors.cardNumber) && <Feedback><ErrorMessage name='cardNumber' /></Feedback>}
              </InputGroup>
            </fieldset>
{/* donation: '',
          frequency: '',

          firstName: '',
          lastName: '',
          email: '',
          phone: '',

          comment: '',

          cardFirstName: '',
          cardLastName: '',
          cardNumber: '',
          country: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: '',

          notRobot: false,
          processingFee: false, */}

            <Button
              color='primary'
              variant='contained'
              type='submit'
              component={Link}
              to='/signin'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default DonateForm;
