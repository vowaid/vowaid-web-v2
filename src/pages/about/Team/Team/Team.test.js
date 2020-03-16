import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Team from './Team';

describe('Team Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Team />
      </MemoryRouter>
    );
  });
});
