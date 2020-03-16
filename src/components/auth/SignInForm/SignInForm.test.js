import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import SignInForm from './SignInForm';

describe('SignInForm Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );
  });
});
