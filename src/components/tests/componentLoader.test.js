import React from 'react';
import { render } from '@testing-library/react';

import NavBar from '../navbar';
import Dashboard from '../dashboard';

test('renders dashboard', () => {
  const { getByText }  = render(<NavBar />);
  const linkedElement = getByText(/Weather/);
  expect(linkedElement).toBeInTheDocument();
});

test('renders Dashboard', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Loading/);
  expect(linkElement).toBeInTheDocument();
});
