import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { makeStyles } from '@material-ui/core/styles';

import { Formik, Field, ErrorMessage } from 'formik';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import { Button, H1, P, Link, Select, Wrapper } from '../../index';
import { Feedback, InputGroup } from '../../forms/Styled/Styled';

import DatePicker from '../../forms/DatePicker/DatePicker';
import Password from '../../forms/Password/Password';

import { gutter } from '../../../styles/utils';

import { branchFormOptions, buildRankFormOptions } from '../../../utils/enums/militaryEnums';

import SignUpSchema from '../../../utils/schemas/signUpSchema';

const initialValues = {
  firstName: '',
  lastName: '',
  dob: null,

  email: '',
  phone: '',

  branch: '',
  rank: '',
  discharge: '',
  serviceDates: '',

  quals: [],
  programs: [],

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

    '& fieldset': {
      padding: '0',

      '& legend': {
        'paddingTop': gutter.L,
      },
    },
  },
  qualsList: {
    paddingLeft: gutter.M,

    '& li': {
      marginBottom: gutter.M,
    },
  },
}));

/**
 * General Modal container component for the application.
 *
 * @class
 */
const SignUpForm = (props) => {
  const classes = useStyles();
  const initRanks = buildRankFormOptions();
  const [ranks, setRanks] = React.useState(initRanks);
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
    <Wrapper className={classes.root}>
      <header>
        <H1 paragraph>Sign Up</H1>

        <P>Already a member? <Link to='/signin' underline='hover'>Sign In</Link></P>
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

              <DatePicker
                disableFuture
                id='dob'
                label='Date of Birth'
                name='Date of Birth'
                onChange={(value) => {
                  setFieldValue('dob', value);
                }}
                placeholder='Date of Birth'
                showError={(touched.dob && errors.dob)}
                value={values.dob}
                variant='inline'
              />
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
              <legend>Service Info</legend>
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

              <DatePicker
                disableFuture
                id='serviceDateStart'
                label='serviceDateStart'
                name='serviceDateStart'
                onChange={(value) => {
                  setFieldValue('serviceDateStart', value);
                }}
                placeholder='serviceDateStart'
                showError={(touched.serviceDateStart && errors.serviceDateStart)}
                value={values.serviceDateStart}
                variant='inline'
              />

              <DatePicker
                disableFuture
                id='endActiveService'
                label='endActiveService'
                name='endActiveService'
                onChange={(value) => {
                  setFieldValue('endActiveService', value);
                }}
                placeholder='endActiveService'
                showError={(touched.endActiveService && errors.endActiveService)}
                value={values.endActiveService}
                variant='inline'
              />

              <DatePicker
                disableFuture
                id='dischargeDate'
                label='dischargeDate'
                name='dischargeDate'
                onChange={(value) => {
                  setFieldValue('dischargeDate', value);
                }}
                placeholder='dischargeDate'
                showError={(touched.dischargeDate && errors.dischargeDate)}
                value={values.dischargeDate}
                variant='inline'
              />
            </fieldset>

            <fieldset>
              <legend>Qualifications</legend>

              <InputGroup>
                <List className={classes.qualsList}>
                  <ListItem button onClick={handleToggle(0)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={qualChecked.indexOf(0) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': 'checkbox-list-label-0' }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <P>DD-214 with an honorable discharge (must be able to provide a copy of DD-214)</P>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={handleToggle(1)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={qualChecked.indexOf(1) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': 'checkbox-list-label-1' }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <P paragraph>Be enrolled in VA healthcare (must be able to provide a copy of VA card)</P>
                      <P paragraph>or</P>
                      <P>Be active duty and with no disciplinary action pending (must be able to provide a copy of Leave and Earning Statement)</P>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={handleToggle(2)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={qualChecked.indexOf(2) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': 'checkbox-list-label-3' }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <P>Be in the process of transitioning out of active duty service (must be able to provide a one paragraph statement of plan of transition out of service)</P>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={handleToggle(3)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={qualChecked.indexOf(3) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': 'checkbox-list-label-3' }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <P>Military Spouse (must be able to provide a copy of military spouse ID)</P>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={handleToggle(4)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={qualChecked.indexOf(4) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': 'checkbox-list-label-4' }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <P>Military child or dependent (must be able to provide a copy of dependent ID)</P>
                    </ListItemText>
                  </ListItem>
                </List>

                <P><em>* All ID's must be current and not expired. Please block out Social Security numbers.</em></P>
              </InputGroup>
            </fieldset>

            <fieldset>
              <legend>Auth</legend>
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
            </fieldset>

            <Button
              color='primary'
              variant='contained'
              type='submit'
              component={Link}
              to='/signin'
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SignUpForm;
