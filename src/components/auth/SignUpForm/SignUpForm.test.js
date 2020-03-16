import React from 'react';
import { render } from '@testing-library/react';
import SignUpForm from './SignUpForm';

describe('SignUpForm Tests', () => {
  it('should render without errors with default props', () => {
    render(<SignUpForm />);
  });
});
