import React from 'react';
import { render } from '@testing-library/react';
import LandingHero from './LandingHero';

describe('LandingHero Tests', () => {
  it('should render without errors with default props', () => {
    render(<LandingHero />);
  });
});
