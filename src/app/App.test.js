import { render, screen } from '@testing-library/react';

import App from './App';

beforeEach(() => {
  // Push the Router basename into history
  window.history.pushState({}, 'Default page', '/coffee-brewing-buddy/');
});

test('should render App', () => {
  render(<App />);

  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  expect(header).toBeVisible();
  expect(header).toHaveTextContent(/Coffee Brewing Buddy/);

  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toBeVisible();

  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
  expect(footer).toBeVisible();
  expect(footer).toHaveTextContent(/.../);
});

test('should land on home page by default', () => {
  render(<App />);

  expect(screen.getByRole('main')).toHaveTextContent(/Web app for tracking coffee brewing/);
});

test('should land on 404 page', () => {
  window.history.pushState({}, '404 page', '/coffee-brewing-buddy/404');

  render(<App />);

  expect(screen.getByRole('main')).toHaveTextContent(/Page not found!/);
});

test('should redirect on 404 page when path is bad', () => {
  window.history.pushState({}, 'Wrong path', '/coffee-brewing-buddy/some/wrong/path');

  render(<App />);

  expect(screen.getByRole('main')).toHaveTextContent(/Page not found!/);
});
