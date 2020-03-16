import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Landing from './Landing';

describe('Landing Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
  });
});
