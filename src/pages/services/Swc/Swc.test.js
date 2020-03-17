import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Swc from './Swc';

describe('Swc Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Swc />
      </MemoryRouter>
    );
  });
});
