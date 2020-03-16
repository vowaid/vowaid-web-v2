import React from 'react';
import { render } from '@testing-library/react';
import Privacy from './Privacy';

describe('Privacy Tests', () => {
  it('should render without errors with default props', () => {
    render(<Privacy />);
  });
});
