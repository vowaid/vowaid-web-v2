import * as Yup from 'yup';

import { PhoneRegExp } from '../../utils/enums/regExEnums';

const SchemaFields = {
  // PII
  name: Yup.string()
    .trim(),
  dob: Yup.date(),

  // Contact Info
  email: Yup.string()
    .trim()
    .email()
    .min(7, 'Too Short')
    .email('Invalid Email'),
  phone: Yup.string()
    .trim()
    .matches(PhoneRegExp, 'Invalid Phone Number')
    .min(9, 'Password should be 9 characters')
    .max(50, 'Too Long'),

  // Service Info
  branch: Yup.string()
    .trim()
    .min(2, 'Too Short')
    .max(50, 'Too Long'),
  rank: Yup.string()
    .trim()
    .min(2, 'Too Short')
    .max(50, 'Too Long'),
  discharge: Yup.string()
    .trim()
    .min(2, 'Too Short')
    .max(50, 'Too Long'),
  serviceDateStart: Yup.date(),
  endActiveService: Yup.date(),
  dischargeDate: Yup.date(),

  // VOWAID info
  programs: Yup.array(),

  // Auth
  username: Yup.string()
    .trim()
    .min(2, 'Too Short')
    .max(50, 'Too Long'),
  password: Yup.string()
    .trim()
    .min(6, 'Password must be longer than 6 characters.')
    .max(50, 'Password must be shorter than 50 characters.'),

  // Contact Form
  message: Yup.string()
    .min(20, 'Too Short')
};

export default SchemaFields;
