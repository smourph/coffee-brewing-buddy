import { render, screen } from '@testing-library/react';

import Home from './Home';

test('should render Home', () => {
  render(<Home />);

  expect(screen.getByText(/Web app for tracking coffee brewing/)).toBeInTheDocument();
});
