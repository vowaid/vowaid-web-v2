import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound Tests', () => {
  it('should render without errors with default props', () => {
    render(<NotFound />);
  });
});
