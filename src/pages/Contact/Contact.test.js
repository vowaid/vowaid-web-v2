import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
  });
});
