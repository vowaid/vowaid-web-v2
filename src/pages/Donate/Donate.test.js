import React from 'react';
import { render } from '@testing-library/react';
import Donate from './Donate';

describe('Donate Tests', () => {
  it('should render without errors with default props', () => {
    render(<Donate />);
  });
});
