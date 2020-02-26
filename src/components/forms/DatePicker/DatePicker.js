import React from 'react';

import DateFnsUtils from '@date-io/date-fns';

import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const MuiDatePicker = (props) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      {...props}
    />
  </MuiPickersUtilsProvider>
);

export default MuiDatePicker;
