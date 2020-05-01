import React from 'react';
import isEmpty from 'lodash/isEmpty';
import qs from 'qs';
import axios from 'axios';
import uuid from 'uuid/v4';
import { makeStyles } from '@material-ui/core/styles';

import { Formik, Field, ErrorMessage } from 'formik';
import { Collapse, TextField } from '@material-ui/core';
import { Button, H3, Feedback, Form, InputGroup, P, Select } from '../../index';

import { gutter } from '../../../styles/utils';

import { branchFormOptions, buildRankFormOptions } from '../../../utils/enums/militaryEnums';
import { contactFormValues, FieldTypes, formFields } from '../../../utils/enums/formEnums';

import ContactSchema from '../../../utils/schemas/contactSchema';

const useStyles = makeStyles(theme => ({
  collapsable: {
    margin: `${gutter.XXL} auto`,
    width: '100%',
    transition: 'margin 0.3s ease, transform 0.3s ease',

    '&[class*="hidden"]': {
      margin: '0',
      transform: 'scaleY(0)',
    },
  },
}));

/**
 * Description.
 */
const ContactForm = (props) => {
  const initRanks = buildRankFormOptions();
  const [ranks, setRanks] = React.useState(initRanks);
  const [displayMessage, setDisplayMessage] = React.useState('');
  const classes = useStyles();

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
    if (window.location.host.includes('localhost') || process.env.NODE_ENV !== 'production') {
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
    const keys = Object.keys(contactFormValues);

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
   * TODO:
   *   - Create build for Select
   *   - Create build for Textarea
   *
   * @param {} formikProps The props returned from Formik.
   */
  const buildFormFields = ({ errors, handleBlur, handleChange, touched, values }) => (
    <>
      {Object.keys(contactFormValues).map((contactFormKey) => {
        const formField = formFields[contactFormKey];

        switch (formField.type) {
          case FieldTypes.SELECT:
          case FieldTypes.TEXTAREA: {
            return null;
          }
          default: {
            return (
              <InputGroup key={uuid()}>
                <label className='sr-only' htmlFor={formField.name}>{formField.name}</label>
                <Field
                  component={formField.component}
                  name={formField.name}
                  id={formField.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={formField.label}
                  placeholder={formField.label}
                  required
                  type={formField.type}
                  value={values[formField.name]}
                />
                {(touched[formField.name] && errors[formField.name]) ? (
                  <Feedback><ErrorMessage name={formField.name} /></Feedback>
                ) : null}
              </InputGroup>
            );
          }
        };
      })}
    </>
  );

  const showSuccess = displayMessage === 'success';
  // const showError = displayMessage === 'error';
  const showForm = !showSuccess;

  return (
    <>
      <Collapse className={classes.collapsable} in={showSuccess}>
        <H3>Thanks for Reaching Out!</H3>
        <P>Someone from our team will be in touch soon.</P>
      </Collapse>

      {/* <Collapse className={classes.collapsable} in={showError}>
        <p>Error</p>
      </Collapse> */}

      <Collapse className={classes.collapsable} in={showForm}>
        <Formik
          initialValues={contactFormValues}
          validationSchema={ContactSchema}
          validate={validateForm}
          validateOnBlur
          enableReinitialize
          validateOnChange={false}
          onSubmit={onFormSubmit}
        >
          {(formikProps) => {
            const {
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
            } = formikProps;

            return (
              <Form
                className={classes.form}
                name='Contact Form'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* NETLIFY FORM NAME */}
                <Field type='hidden' name='form-name' value='Contact Form' />
                {/* NETLIFY BOT FIELD */}
                <Field type='hidden' name='bot-field' />

                <section>
                  {buildFormFields(formikProps)}

                  <InputGroup>
                    <label className='sr-only' htmlFor='branch'>Branch</label>
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
                    <label className='sr-only' htmlFor='rank'>Rank</label>
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
                    <label className='sr-only' htmlFor='discharge'>Discharge</label>
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

                  <InputGroup>
                    <label className='sr-only' htmlFor='message'>Message</label>
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
            );
          }}
        </Formik>
      </Collapse>
    </>
  );
};

export default ContactForm;
