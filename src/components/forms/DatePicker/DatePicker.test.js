import React from 'react';
import { render } from '@testing-library/react';

import { Formik } from 'formik';
import DatePicker from './DatePicker';

describe('DatePicker Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <Formik>
        <DatePicker />
      </Formik>
    );
  });
});
