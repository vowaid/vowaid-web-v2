import React from 'react';
import { render } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea Tests', () => {
  it('should render without errors with default props', () => {
    render(<TextArea />);
  });
});
