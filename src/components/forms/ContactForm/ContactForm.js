import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import isEmpty from 'lodash/isEmpty'
import * as Yup from 'yup';

import { Button, TextField } from '@material-ui/core';
import { Select } from '../../index';

import { gutter } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import { branchFormOptions } from '../../../utils/enums/militaryEnums';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  branch: '',
  rank: '',
  discharge: '',
  message: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too Short')
    .email('Invalid email')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  branch: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  rank: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  discharge: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
});

/**
 * Description.
 */
const ContactForm = (props) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  /**
   * Description.
   *
   * @param {} values
   * @param {} actions
   */
  const onFormSubmit = (values, actions) => {
    console.log(values, actions);
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
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      validate={validateForm}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onFormSubmit}
      render={({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldTouched,
        setFieldValue,
        submitForm,
        values,
      }) => (
        <Form onSubmit={handleSubmit}>
          <section>
            <InputGroup>
              <TextField
                name='name'
                onBlur={handleBlur}
                onChange={handleChange}
                label='Name'
                placeholder='name'
                required
                type='text'
                value={values.name}
              />
              {(errors.name) && <Feedback>{errors.name}</Feedback>}
            </InputGroup>

            <InputGroup>
              <TextField
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}
                label='Email'
                placeholder='email'
                required
                type='email'
                value={values.email}
              />
              {(errors.email) && <Feedback>{errors.email}</Feedback>}
            </InputGroup>

            <InputGroup>
              <TextField
                name='phone'
                onBlur={handleBlur}
                onChange={handleChange}
                label='Phone'
                placeholder='phone'
                required
                type='tel'
                value={values.phone}
              />
              {(errors.phone) && <Feedback>{errors.phone}</Feedback>}
            </InputGroup>

            <InputGroup>
              <Select
                name='branch'
                onBlur={() => setFieldTouched('branch', true)}
                onChange={value => setFieldValue('branch', value)}
                options={branchFormOptions()}
                label='Branch'
                placeholder='branch'
                required
                value={values.branch}
              />
              {(errors.branch) && <Feedback>{errors.branch}</Feedback>}
            </InputGroup>

            <InputGroup>
              <Select
                name='rank'
                onBlur={() => setFieldTouched('rank', true)}
                onChange={value => setFieldValue('rank', value)}
                options={[
                  { value: 'E1', label: 'E1' },
                  { value: 'E2', label: 'E2' },
                  { value: 'E3', label: 'E3' },
                  { value: 'E4', label: 'E4' },
                  { value: 'E5', label: 'E5' },
                  { value: 'E6', label: 'E6' },
                  { value: 'E7', label: 'E7' },
                  { value: 'E8', label: 'E8' },
                  { value: 'E9', label: 'E9' },

                  { value: 'WO1', label: 'WO1' },
                  { value: 'WO2', label: 'WO2' },
                  { value: 'WO3', label: 'WO3' },
                  { value: 'WO4', label: 'WO4' },
                  { value: 'WO5', label: 'WO5' },

                  { value: 'O1', label: 'O1' },
                  { value: 'O2', label: 'O2' },
                  { value: 'O3', label: 'O3' },
                  { value: 'O4', label: 'O4' },
                  { value: 'O5', label: 'O5' },
                  { value: 'O6', label: 'O6' },
                  { value: 'O7', label: 'O7' },
                  { value: 'O8', label: 'O8' },
                  { value: 'O9', label: 'O9' },
                  { value: 'O10', label: 'O10' },
                ]}
                label='Rank'
                placeholder='rank'
                required
                value={values.rank}
              />
              {(errors.rank) && <Feedback>{errors.rank}</Feedback>}
            </InputGroup>

            <InputGroup>
              <Select
                name='discharge'
                onBlur={() => setFieldTouched('discharge', true)}
                onChange={value => setFieldValue('discharge', value)}
                options={[
                  { value: 'honorable', label: 'Honorable' },
                  { value: 'general', label: 'General' },
                  { value: 'other than honorable conditions', label: 'Other Than Honorable Conditions' },
                  { value: 'dishonorable', label: 'Dishonorable' },
                  { value: 'officer', label: 'Officer' },
                  { value: 'entry level separation', label: 'Entry Level Separation' },
                ]}
                label='Discharge'
                placeholder='discharge'
                required
                value={values.discharge}
              />
              {(errors.discharge) && <Feedback>{errors.discharge}</Feedback>}
            </InputGroup>

            <InputGroup className='input-group--textarea'>
              <TextField
                multiline
                name='message'
                onBlur={handleBlur}
                onChange={handleChange}
                label='Message'
                placeholder='message'
                required
                value={values.message}
              />
              {(errors.message) && <Feedback>{errors.message}</Feedback>}
            </InputGroup>
          </section>

          <Button
            className='MuiToolbar-regular'
            color='primary'
            variant='contained'
            disabled={isSubmitting}
            onClick={() => {
              setIsSubmitting(true);
              submitForm();
            }}
            type='submit'
          >Submit</Button>
        </Form>
      )}
    />
  );
};

const Form = styled.form`
  margin: ${gutter.XXL} auto;
  width: 90%;
`;

const InputGroup = styled.div`
  margin-bottom: ${gutter.L};

  &.input-group--textarea {
    margin-top: ${gutter.XL};
  }

  > * {
    width: 100%;
  }
`;

const Feedback = styled.small`
  color: ${vowaidColors.red.default};
  display: inline-block;
  transform: translateY(-${gutter.M});
`;

export default ContactForm;
