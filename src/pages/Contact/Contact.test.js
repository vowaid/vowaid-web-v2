import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Tests', () => {
  it('should render without errors with default props', () => {
    render(<Contact />);
  });
});
