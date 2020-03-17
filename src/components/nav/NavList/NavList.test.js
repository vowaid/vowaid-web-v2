import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import NavList from './NavList';

describe('NavList Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <NavList />
      </MemoryRouter>
    );
  });
});
