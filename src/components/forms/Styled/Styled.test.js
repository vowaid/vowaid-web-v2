import React from 'react';
import { render } from '@testing-library/react';
import { Feedback, InputGroup } from './Styled';

describe('Styled Component Tests', () => {
  it('should render Feedback without errors with default props', () => {
    render(<Feedback />);
  });

  it('should render InputGroup without errors with default props', () => {
    render(<InputGroup />);
  });
});
