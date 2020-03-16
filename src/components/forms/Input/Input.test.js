import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input Tests', () => {
  it('should render without errors with default props', () => {
    render(<Input />);
  });
});
