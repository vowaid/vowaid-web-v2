import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('About Tests', () => {
  it('should render without errors with default props', () => {
    render(<About />);
  });
});
