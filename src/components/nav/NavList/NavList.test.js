import React from 'react';
import { render } from '@testing-library/react';
import NavList from './NavList';

describe('NavList Tests', () => {
  it('should render without errors with default props', () => {
    render(<NavList />);
  });
});
