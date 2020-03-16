import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import MemberCard from './MemberCard';

describe('MemberCard Tests', () => {
  it('should render without errors with default props', () => {
    render(
      <MemoryRouter>
        <MemberCard />
      </MemoryRouter>
    );
  });
});
