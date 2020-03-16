import React from 'react';
import { render } from '@testing-library/react';
import Swc from './Swc';

describe('Swc Tests', () => {
  it('should render without errors with default props', () => {
    render(<Swc />);
  });
});
