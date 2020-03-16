import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Tests', () => {
  it('should render without errors with default props', () => {
    render(<Checkbox />);
  });
});
