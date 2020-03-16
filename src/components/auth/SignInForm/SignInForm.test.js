import React from 'react';
import { render } from '@testing-library/react';
import SignInForm from './SignInForm';

describe('SignInForm Tests', () => {
  it('should render without errors with default props', () => {
    render(<SignInForm />);
  });
});
