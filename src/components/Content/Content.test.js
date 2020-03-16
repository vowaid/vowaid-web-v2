import React from 'react';
import { render } from '@testing-library/react';
import Content from './Content';

describe('Content Tests', () => {
  it('should render without errors with default props', () => {
    render(<Content />);
  });
});
