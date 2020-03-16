import React from 'react';
import { render } from '@testing-library/react';
import { Wrapper } from './Styled';

describe('Styled Component Tests', () => {
  it('should render Wrapper without errors with default props', () => {
    render(<Wrapper />);
  });
});
