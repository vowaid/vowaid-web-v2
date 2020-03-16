import React from 'react';
import { render } from '@testing-library/react';
import Team from './Team';

describe('Team Tests', () => {
  it('should render without errors with default props', () => {
    render(<Team />);
  });
});
