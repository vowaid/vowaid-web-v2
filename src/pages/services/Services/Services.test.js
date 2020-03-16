import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Services from './Services';

describe('Services Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );
  });
});
