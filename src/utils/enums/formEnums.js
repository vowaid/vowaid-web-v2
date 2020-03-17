// import { Field } from 'formik';
import { TextField } from '@material-ui/core';
import { Select } from '../../components';

const FieldTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
  SELECT: 'select',
  TEXTAREA: 'textarea',
};

const formFields = {
  // Field - Input
  name: {
    initialValue: '',
    component: TextField,
    name: 'name',
    label: 'Name',
    type: FieldTypes.TEXT,
  },
  email: {
    initialValue: '',
    component: TextField,
    name: 'email',
    label: 'Email',
    type: FieldTypes.EMAIL,
  },
  phone: {
    initialValue: '',
    component: TextField,
    name: 'phone',
    label: 'Phone',
    type: FieldTypes.TEL,
  },

  // Select
  branch: {
    initialValue: '',
    component: Select,
    name: 'branch',
    label: 'Branch',
    type: FieldTypes.SELECT,
  },
  rank: {
    initialValue: '',
    component: Select,
    name: 'rank',
    label: 'Rank',
    type: FieldTypes.SELECT,
  },
  discharge: {
    initialValue: '',
    component: Select,
    name: 'discharge',
    label: 'Discharge',
    type: FieldTypes.SELECT,
  },

  // Field - Textarea
  message: {
    initialValue: '',
    component: null,
    name: 'message',
    label: 'Message',
    type: FieldTypes.TEXTAREA,
    props: {
      multiline: true,
    },
  },
};

const contactFormValues = {
  'name': '',
  'email': '',
  'phone': '',
  'branch': '',
  'rank': '',
  'discharge': '',
  'message': '',
};

export {
  contactFormValues,
  FieldTypes,
  formFields,
};
