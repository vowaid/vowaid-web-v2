import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });
});
