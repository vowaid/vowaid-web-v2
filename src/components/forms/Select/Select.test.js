import React from 'react';
import { render } from '@testing-library/react';

import { Formik } from 'formik';
import Select from './Select';

describe('Select Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <Formik>
        <Select />
      </Formik>
    );
  });
});
