import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>
    );
  });
});
