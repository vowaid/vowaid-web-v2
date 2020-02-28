import React from 'react';
import Proptypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Field, ErrorMessage } from 'formik';
import { DatePicker as MuiDatePicker } from 'material-ui-formik-components/DatePicker';
import { Feedback, InputGroup } from '../Styled/Styled';

const DatePicker = ({ showError, ...others }) => (
  <InputGroup>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Field {...others} />
    </MuiPickersUtilsProvider>
    {(showError) && <Feedback><ErrorMessage name='dob' /></Feedback>}
  </InputGroup>
);

DatePicker.propTypes = {
  component: Proptypes.elementType,
  disableFuture: Proptypes.bool,
  format: Proptypes.string,
  id: Proptypes.string,
  label: Proptypes.string,
  margin: Proptypes.string,
  name: Proptypes.string,
  openTo: Proptypes.string,
  placeholder: Proptypes.string,
  required: Proptypes.bool,
  showError: Proptypes.bool,
  value: Proptypes.string,
  variant: Proptypes.string,
};

DatePicker.defaultProps = {
  component: MuiDatePicker,
  disableFuture: false,
  format: 'MM/dd/yyyy',
  id: '',
  label: '',
  margin: 'normal',
  name: '',
  openTo: 'year',
  placeholder: '',
  required: false,
  showError: false,
  value: null,
  variant: '',
};

export default DatePicker;
