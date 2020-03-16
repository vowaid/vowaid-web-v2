import React from 'react';
import { render } from '@testing-library/react';
import Events from './Events';

describe('Events Tests', () => {
  it('should render without errors with default props', () => {
    render(<Events />);
  });
});
