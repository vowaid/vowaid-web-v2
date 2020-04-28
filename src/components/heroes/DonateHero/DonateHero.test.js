import React from 'react';
import { render } from '@testing-library/react';
import TwcHero from './TwcHero';

describe('TwcHero Tests', () => {
  it('should render without errors with default props', () => {
    render(<TwcHero />);
  });
});
