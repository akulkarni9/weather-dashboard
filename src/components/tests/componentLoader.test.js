import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from '../dashboard';

test('renders Navbar', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Loading/);
  expect(linkElement).toBeInTheDocument();
});
