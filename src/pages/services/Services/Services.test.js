import React from 'react';
import { render } from '@testing-library/react';
import Services from './Services';

describe('Services Tests', () => {
  it('should render without errors with default props', () => {
    render(<Services />);
  });
});
