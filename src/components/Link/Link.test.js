import React from 'react';
import { render } from '@testing-library/react';
import Link from './Link';

describe('Link Tests', () => {
  it('should render without errors with default props', () => {
    render(<Link />);
  });
});
