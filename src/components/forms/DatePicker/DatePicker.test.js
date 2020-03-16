import React from 'react';
import { render } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('DatePicker Tests', () => {
  it('should render without errors with default props', () => {
    render(<DatePicker />);
  });
});
