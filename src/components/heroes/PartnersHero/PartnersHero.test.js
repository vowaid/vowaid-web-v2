import React from 'react';
import { render } from '@testing-library/react';
import PartnersHero from './PartnersHero';

describe('PartnersHero Tests', () => {
  it('should render without errors with default props', () => {
    render(<PartnersHero />);
  });
});
