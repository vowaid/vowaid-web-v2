import React from 'react';
import { render } from '@testing-library/react';
import Typography from './Typography';

describe('Typography Tests', () => {
  it('should render without errors with default props', () => {
    render(<Typography />);
  });
});
