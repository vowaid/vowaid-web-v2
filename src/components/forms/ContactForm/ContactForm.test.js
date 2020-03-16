import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm Tests', () => {
  it('should render without errors with default props', () => {
    render(<ContactForm />);
  });
});
