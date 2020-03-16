import React from 'react';
import { render } from '@testing-library/react';
import ServicesHero from './ServicesHero';

describe('ServicesHero Tests', () => {
  it('should render without errors with default props', () => {
    render(<ServicesHero />);
  });
});
