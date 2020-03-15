// import { Field } from 'formik';
import { TextField } from '@material-ui/core';
import { Select } from '../../index';

const FieldTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
};

const formFields = {
  // Field - Sub-Components
  Name: {
    initialValue: '',
    component: TextField,
    name: 'name',
    label: 'Name',
    type: FieldTypes.TEXT,
  },
  EMAIL: {
    initialValue: '',
    component: TextField,
    name: 'email',
    label: 'Email',
    type: FieldTypes.EMAIL,
  },
  PHONE: {
    initialValue: '',
    component: TextField,
    name: 'phone',
    label: 'Phone',
    type: FieldTypes.TEL,
  },

  // Select
  BRANCH: {
    initialValue: '',
    component: Select,
    name: 'branch',
    label: 'Branch',
  },
  RANK: {
    initialValue: '',
    component: Select,
    name: 'rank',
    label: 'Rank',
  },
  DISCHARGE: {
    initialValue: '',
    component: Select,
    name: 'discharge',
    label: 'Discharge',
  },

  // Textarea
  MESSAGE: {
    initialValue: '',
    component: TextArea,
    name: 'message',
    label: 'Message',
    props: {
      multiline: true,
    },
  },
};

export {
  formFields,
};
