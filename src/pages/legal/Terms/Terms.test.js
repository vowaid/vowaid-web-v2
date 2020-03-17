import React from 'react';
import { render } from '@testing-library/react';
import Terms from './Terms';

describe('Terms Tests', () => {
  it('should render without errors with default props', () => {
    render(<Terms />);
  });
});
