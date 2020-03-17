import React from 'react';
import { render } from '@testing-library/react';
import Member from './Member';

describe('Member Tests', () => {
  it('should render without errors with default props', () => {
    render(<Member />);
  });
});
