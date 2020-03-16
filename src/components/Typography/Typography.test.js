import React from 'react';
import { render } from '@testing-library/react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P
} from './Typography';

describe('Typography Tests', () => {
  it('should render H1 without errors with default props', () => {
    render(<H1 />);
  });

  it('should render H2 without errors with default props', () => {
    render(<H2 />);
  });

  it('should render H3 without errors with default props', () => {
    render(<H3 />);
  });

  it('should render H4 without errors with default props', () => {
    render(<H4 />);
  });

  it('should render H5 without errors with default props', () => {
    render(<H5 />);
  });

  it('should render H6 without errors with default props', () => {
    render(<H6 />);
  });

  it('should render P without errors with default props', () => {
    render(<P />);
  });
});
