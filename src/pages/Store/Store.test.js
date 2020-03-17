import React from 'react';
import { render } from '@testing-library/react';
import Store from './Store';

describe('Store Tests', () => {
  it('should render without errors with default props', () => {
    render(<Store />);
  });
});
