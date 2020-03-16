import React from 'react';
import { render } from '@testing-library/react';
import AboutHero from './AboutHero';

describe('AboutHero Tests', () => {
  it('should render without errors with default props', () => {
    render(<AboutHero />);
  });
});
