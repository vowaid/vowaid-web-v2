import React from 'react';
import { render } from '@testing-library/react';
import CoverImage from './CoverImage';

describe('CoverImage Tests', () => {
  it('should render without errors with default props', () => {
    render(<CoverImage />);
  });
});
