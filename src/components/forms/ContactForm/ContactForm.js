import React from 'react';
import styled from 'styled-components';
import { styled as muiStyled } from '@material-ui/core/styles';
import isEmpty from 'lodash/isEmpty';
import qs from 'qs';
import axios from 'axios';

import { Formik, Field, ErrorMessage } from 'formik';
import { Collapse, TextField } from '@material-ui/core';
import { Button, H3, P, Select } from '../../index';

import { gutter } from '../../../styles/utils';

import { branchFormOptions, buildRankFormOptions } from '../../../utils/enums/militaryEnums';

import ContactSchema from '../../../utils/schemas/contactSchema';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  branch: '',
  rank: '',
  discharge: '',
  message: '',
};

const Form = styled.form`
  width: 100%;
`;

const Collapsable = styled(Collapse)`
  margin: ${gutter.XXL} auto;
  width: 100%;
  transition: margin 0.3s ease, transform 0.3s ease;

  &[class*="hidden"] {
    margin: 0;
    transform: scaleY(0);
  }
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

const Feedback = muiStyled('small')(({ theme }) => {
  const paletteColor = (theme.palette.type === 'dark') ? 'light' : 'dark';

  return {
    color: theme.palette.error[paletteColor],
    display: 'inline-block',
  };
}, {
  withTheme: true,
});

/**
 * Description.
 */
const ContactForm = (props) => {
  const initRanks = buildRankFormOptions();
  const [ranks, setRanks] = React.useState(initRanks);
  const [displayMessage, setDisplayMessage] = React.useState('');

  const onSuccess = (actions) => {
    actions.setSubmitting(false);
    actions.resetForm({});
    actions.setStatus({ success: true });
    setDisplayMessage('success');
  }

  /**
   * Description.
   *
   * @param {} values
   * @param {} actions
   */
  const onFormSubmit = async (values, actions) => {
    const data = {
      'form-name': 'Contact Form',
      ...values,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url: window.location.pathname,
    };

    // Short-circut the axios call for localhost and force success
    if (window.location.host.includes('localhost')) {
      onSuccess(actions);
      return;
    }

    try {
      await axios(options);
      onSuccess(actions);
    } catch (error) {
      actions.setStatus({success: false});
      actions.setSubmitting(false);
      actions.setErrors({submit: error.message});
      setDisplayMessage('error');
    }
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

  const showSuccess = displayMessage === 'success';
  // const showError = displayMessage === 'error';
  const showForm = !showSuccess;

  return (
    <>
      <Collapsable in={showSuccess}>
        <H3>Thanks for Reaching Out!</H3>
        <P>Someone from our team will be in touch soon.</P>
      </Collapsable>

      {/* <Collapsable in={showError}>
        <p>Error</p>
      </Collapsable> */}

      <Collapsable in={showForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={ContactSchema}
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
            status,
            submitForm,
            touched,
            values,
          }) => (
            <Form
              name='Contact Form'
              method='POST'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              success={!!status && !!status.success}
              error={!!errors.submit}
            >
              {/* NETLIFY FORM NAME */}
              <Field type='hidden' name='form-name' value='Contact Form' />
              {/* NETLIFY BOT FIELD */}
              <Field type='hidden' name='bot-field' />

              <section>
                <InputGroup>
                  <Field
                    component={TextField}
                    name='name'
                    id='name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label='Name'
                    placeholder='Name'
                    required
                    type='text'
                    value={values.name}
                  />
                  {(touched.name && errors.name) && <Feedback><ErrorMessage name='name' /></Feedback>}
                </InputGroup>

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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label='Phone'
                    placeholder='phone'
                    required
                    type='tel'
                    value={values.phone}
                  />
                  {(touched.phone && errors.phone) && <Feedback><ErrorMessage name='phone' /></Feedback>}
                </InputGroup>

                <InputGroup>
                  <Select
                    name='branch'
                    id='branch'
                    onBlur={() => setFieldTouched('branch', true)}
                    onChange={value => {
                      const newRanks = buildRankFormOptions(value);
                      setRanks(newRanks);
                      setFieldValue('branch', value);
                    }}
                    options={branchFormOptions()}
                    label='Branch'
                    placeholder='branch'
                    required
                    value={values.branch}
                  />
                  {(touched.branch && errors.branch) && <Feedback><ErrorMessage name='branch' /></Feedback>}
                </InputGroup>

                <InputGroup>
                  <Select
                    name='rank'
                    id='rank'
                    onBlur={() => setFieldTouched('rank', true)}
                    onChange={(value) => setFieldValue('rank', value)}
                    options={ranks}
                    label='Rank'
                    placeholder='rank'
                    required
                    value={values.rank}
                  />
                  {(touched.rank && errors.rank) && <Feedback><ErrorMessage name='rank' /></Feedback>}
                </InputGroup>

                <InputGroup>
                  <Select
                    name='discharge'
                    id='discharge'
                    onBlur={() => setFieldTouched('discharge', true)}
                    onChange={value => setFieldValue('discharge', value)}
                    options={[
                      { value: 'Not Applicable', label: 'N/A'},
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
                  {(touched.discharge && errors.discharge) && <Feedback><ErrorMessage name='discharge' /></Feedback>}
                </InputGroup>

                <InputGroup className='input-group--textarea'>
                  <Field
                    component={TextField}
                    multiline
                    name='message'
                    id='message'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label='Message'
                    placeholder='message'
                    required
                    value={values.message}
                  />
                  {(touched.message && errors.message) && <Feedback><ErrorMessage name='message' /></Feedback>}
                </InputGroup>
              </section>

              <Button
                color='primary'
                variant='contained'
                disabled={isSubmitting || isValidating}
                onClick={() => {
                  submitForm();
                }}
                type='submit'
              >Submit</Button>
            </Form>
          )}
        </Formik>
      </Collapsable>
    </>
  );
};

export default ContactForm;
