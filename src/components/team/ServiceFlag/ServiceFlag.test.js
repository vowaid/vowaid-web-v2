import React from 'react';
import { render } from '@testing-library/react';
import ServiceFlag from './ServiceFlag';

describe('ServiceFlag Tests', () => {
  it('should render without errors with default props', () => {
    render(<ServiceFlag />);
  });
});
