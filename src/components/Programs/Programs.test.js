import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Programs from './Programs';

describe('Programs Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <Programs />
      </MemoryRouter>
    );
  });
});
