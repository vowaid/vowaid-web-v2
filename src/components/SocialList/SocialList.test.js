import React from 'react';
import { render } from '@testing-library/react';
import SocialList from './SocialList';

describe('SocialList Tests', () => {
  it('should render without errors with default props', () => {
    render(<SocialList />);
  });
});
