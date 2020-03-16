import React from 'react';
import { render } from '@testing-library/react';
import Faqs from './Faqs';

describe('Faqs Tests', () => {
  it('should render without errors with default props', () => {
    render(<Faqs />);
  });
});
