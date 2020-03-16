import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Auth from './Auth';

describe('Auth Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );
  });
});
