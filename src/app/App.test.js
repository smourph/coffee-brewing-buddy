import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App', () => {
  render(<App />);

  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  expect(header).toBeVisible();
  expect(header).toHaveTextContent(/Coffee Brewing Buddy/);

  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toBeVisible();
  expect(main).toHaveTextContent(/Web app for tracking coffee brewing/);

  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
  expect(footer).toBeVisible();
  expect(footer).toHaveTextContent(/.../);
});
