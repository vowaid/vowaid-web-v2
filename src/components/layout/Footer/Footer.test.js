import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Tests', () => {
  it('should render without errors with default props', () => {
    render(<Footer />);
  });
});
