import React from 'react';
import { render } from '@testing-library/react';
import NavDrawer from './NavDrawer';

describe('NavDrawer Tests', () => {
  it('should render without errors with default props', () => {
    render(<NavDrawer />);
  });
});
