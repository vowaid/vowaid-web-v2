import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import NavDrawer from './NavDrawer';

describe('NavDrawer Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <NavDrawer />
      </MemoryRouter>
    );
  });
});
