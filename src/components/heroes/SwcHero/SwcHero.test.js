import React from 'react';
import { render } from '@testing-library/react';
import SwcHero from './SwcHero';

describe('SwcHero Tests', () => {
  it('should render without errors with default props', () => {
    render(<SwcHero />);
  });
});
