import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Twc from './Twc';

describe('Twc Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Twc />
      </MemoryRouter>
    );
  });
});
