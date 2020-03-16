import React from 'react';
import { render } from '@testing-library/react';
import Partners from './Partners';

describe('Partners Tests', () => {
  it('should render without errors with default props', () => {
    render(<Partners />);
  });
});
