import React from 'react';
import styled from 'styled-components';

import { Formik } from 'formik';
import { Button, H1, P, Link, Select } from '../../index';

import { createTransitionForProperties, gutter, hexToRgb, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import { Options } from '../../../utils/enums/dateEnums';

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

  > section {
    margin-bottom: ${gutter.L};
  }

  ul {
    list-style: initial;
    padding-left: ${gutter.M};

    li {
      margin-bottom: ${gutter.M};
    }
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${vowaidColors.black};
    box-shadow: inset 0 0 0 0 rgba(${hexToRgb(vowaidColors.blue[100])}, 0);
    height: ${pxToEm(45)};
    outline: none;
    padding: ${gutter.XS} ${gutter.M};
    position: relative;
    width: 100%;
    ${createTransitionForProperties(['border-bottom', 'padding'])};

    &:focus {
      border-bottom: 3px solid ${vowaidColors.blue[100]};
      padding-bottom: calc(${gutter.XS} - ${pxToEm(3)});
    }
  }
`;

const InputGroup = styled.div``;


/**
 * General Modal container component for the application.
 *
 * @class
 */
const SignUpForm = (props) => {
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

  return (
    <Formik
      initialValues={{
        name: '',
        dob: '',
        branch: '',
        serviceDates: '',

        program: '',

        email: '',
        phone: '',

        username: '',
        password: '',
      }}
      onSubmit={onFormSubmit}
      render={(props) => (
        <Form onSubmit={props.handleSubmit}>
          <header>
            <H1>Sign In</H1>
          </header>

          <section>
            <InputGroup className='input-group'>
              <label
                name='First Name'
                placeholder='First Name'
              >
                <span>First Name</span>
                <input
                  type='text'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name='name'
                  placeholder='First Name'
                />
                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
              </label>

              <label
                name='Last Name'
                placeholder='Last Name'
              >
                <span>Last Name</span>
                <input
                  type='text'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name='name'
                  placeholder='Last Name'
                />
                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
              </label>
            </InputGroup>

            <InputGroup className='input-group'>
              <label
                name='Branch of Service'
                placeholder='Branch of Service'
              >
                <span>Branch of Service</span>

                <input
                  type='text'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.branch}
                  name='branch'
                  placeholder='Branch of Service'
                />
                {props.errors.branch && <div id="feedback">{props.errors.branch}</div>}
              </label>
            </InputGroup>

            <InputGroup className='input-group'>
              <label
                name='Dates of Service'
                placeholder='Dates of Service'
              >
                <span>Dates of Service</span>

                <div>
                  <Select
                    options={Options.MONTHS}
                    name='months'
                  />

                  <Select
                    options={Options.YEARS}
                    name='months'
                  />
                </div>

                {props.errors.serviceDates && <div id="feedback">{props.errors.serviceDates}</div>}
              </label>
            </InputGroup>
          </section>

          <section>
            <InputGroup className='input-group'>
              <label
                name='Program of Interest'
                placeholder='Program of Interest'
              >
                <span>Program of Interest</span>
                <input
                  type='text'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.program}
                  name='program'
                  placeholder='Program of Interest'
                />
                {props.errors.program && <div id="feedback">{props.errors.program}</div>}
              </label>
            </InputGroup>

            <InputGroup className='input-group'>
              <label
                name='Qualifications'
                placeholder='Qualifications'
              >
                <span>Qualifications</span>

                <ul>
                  <li>
                    <P>DD-214 with an honorable discharge (must be able to provide a copy of DD-214)</P>
                  </li>

                  <li>
                    <P>Be enrolled in VA healthcare (must be able to provide a copy of VA card)</P>
                    <P>or</P>
                    <P>Be active duty and with no disciplinary action pending (must be able to provide a copy of Leave and Earning Statement)</P>
                </li>

                  <li>
                    <P>Be in the process of transitioning out of active duty service (must be able to provide a one paragraph statement of plan of transition out of service)</P>
                  </li>

                  <li>
                    <P>Military Spouse (must be able to provide a copy of military spouse ID)</P>
                  </li>

                  <li>
                    <P>Military child or dependent (must be able to provide a copy of dependent ID)</P>
                  </li>

                  <li>
                    <P>All ID's must be current and not expired. Please block out Social Security numbers.</P>
                  </li>
                </ul>
              </label>
            </InputGroup>
          </section>

          <section>
            <InputGroup className='input-group'>
              <label
                name='Email'
                placeholder='Email'
              >
                <span>Email</span>
                <input
                  type='text'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name='email'
                  placeholder='Email'
                />
                {props.errors.email && <div id="feedback">{props.errors.email}</div>}
              </label>
            </InputGroup>

            <InputGroup className='input-group'>
              <label
                name='Phone'
                placeholder='Phone'
              >
                <span>Phone</span>
                <input
                  type='phone'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.phone}
                  name='phone'
                  placeholder='Phone'
                />
                {props.errors.phone && <div id="feedback">{props.errors.phone}</div>}
              </label>
            </InputGroup>

            <InputGroup className='input-group'>
              <label
                name='Date of Birth'
                placeholder='Date of Birth'
              >
                <span>Date of Birth</span>
                <input
                  type='date'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.dob}
                  name='dob'
                  placeholder='Date of Birth'
                />
                {props.errors.dob && <div id="feedback">{props.errors.dob}</div>}
              </label>
            </InputGroup>
          </section>

          <section>
            <InputGroup className='input-group'>
              <label
                name='Username'
                placeholder='Username'
              >
                <span>Username</span>
                <input
                  type='text'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.username}
                  name='username'
                  placeholder='Username'
                />
                {props.errors.username && <div id="feedback">{props.errors.username}</div>}
              </label>
            </InputGroup>

            <InputGroup className='input-group'>
              <label
                name='Password'
                placeholder='Password'
              >
                <span>Password</span>
                <input
                  type='password'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name='password'
                  placeholder='Password'
                />
                {props.errors.password && <div id="feedback">{props.errors.password}</div>}
              </label>
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
    />
  );
};

export default SignUpForm;
