import React from 'react';
import styled from 'styled-components';
import { styled as muiStyled } from '@material-ui/core/styles';
import isEmpty from 'lodash/isEmpty';

import { Formik, Field, ErrorMessage } from 'formik';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import { Button, H1, P, Link, Select, Wrapper } from '../../index';

import { gutter } from '../../../styles/utils';
// import { vowaidColors } from '../../../styles/colors';

import { branchFormOptions, buildRankFormOptions } from '../../../utils/enums/militaryEnums';
// import { Options } from '../../../utils/enums/dateEnums';

import SignUpSchema from '../../../utils/schemas/signUpSchema';

const initialValues = {
  name: '',
  dob: '',
  email: '',
  phone: '',

  branch: '',
  rank: '',
  discharge: '',
  serviceDates: '',

  programs: [],

  username: '',
  password: '',
};

const Form = styled.form`
  padding: ${gutter.XXL} 0;
  width: 100%;
`;

const QualsList = styled(List)`
  &.quals-list {
    padding-left: ${gutter.M};

    li {
      margin-bottom: ${gutter.M};
    }
  }
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${gutter.L};

  &.input-group--textarea {
    margin-top: ${gutter.XL};
  }

  > * {
    width: 100%;

    &:not(:first-child) {
      margin-left: ${gutter.L};
    }
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
 * General Modal container component for the application.
 *
 * @class
 */
const SignUpForm = (props) => {
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
            <header>
              <H1>Sign In</H1>
            </header>

            <section>
              <InputGroup className='input-group'>
                <Field
                  component={TextField}
                  name='First Name'
                  id='first-name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='First Name'
                  placeholder='First Name'
                  required
                  type='text'
                  value={values.name}
                />
                {(touched.firstName && errors.firstName) && <Feedback><ErrorMessage name='name' /></Feedback>}

                <Field
                  component={TextField}
                  name='Last Name'
                  id='last-name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label='Last Name'
                  placeholder='Last Name'
                  required
                  type='text'
                  value={values.name}
                />
                {(touched.lastName && errors.lastName) && <Feedback><ErrorMessage name='name' /></Feedback>}
              </InputGroup>

              <InputGroup>
                {/* TODO: Add DOB */}
              </InputGroup>
            </section>

            <section>
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
            </section>

            <section>
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

              <InputGroup>
                {/* TODO: Add serviceDateStart */}
              </InputGroup>

              <InputGroup>
                {/* TODO: Add endActiveService */}
              </InputGroup>

              <InputGroup>
                {/* TODO: Add dischargeDate */}
              </InputGroup>
            </section>

            <section>
              <InputGroup>
                {/* TODO: Add DOB */}
              </InputGroup>

              <InputGroup className='input-group'>
                <label
                  name='Qualifications'
                  placeholder='Qualifications'
                >
                  <span>Qualifications</span>

                  <QualsList className='quals-list'>
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

                    <ListItem button onClick={handleToggle(5)}>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={qualChecked.indexOf(5) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'checkbox-list-label-5' }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <P>All ID's must be current and not expired. Please block out Social Security numbers.</P>
                      </ListItemText>
                    </ListItem>
                  </QualsList>
                </label>
              </InputGroup>
            </section>

            <section>
              <InputGroup>
                {/* TODO: Add username */}
              </InputGroup>

              <InputGroup>
                {/* TODO: Add password */}
              </InputGroup>
            </section>

            <Button
              color='primary'
              variant='contained'
              type='submit'
              component={Link}
              to='/signin'
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SignUpForm;
