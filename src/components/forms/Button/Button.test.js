import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Tests', () => {
  it('should render without errors with default props', () => {
    render(<Button />);
  });
});
