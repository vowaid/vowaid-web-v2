import React from 'react';
import { render } from '@testing-library/react';
import Seo from './Seo';

describe('Seo Tests', () => {
  it('should render without errors with default props', () => {
    render(<Seo />);
  });
});
