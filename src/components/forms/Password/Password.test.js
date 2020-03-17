import React from 'react';
import { render } from '@testing-library/react';

import { Formik } from 'formik';
import Password from './Password';

describe('Password Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <Formik>
        <Password />
      </Formik>
    );
  });
});
