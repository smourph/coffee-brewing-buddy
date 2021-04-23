import {
  act, fireEvent, render, screen,
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import NotFound from './NotFound';

const renderWithRouter = (ui, routerProps = { history: createMemoryHistory() }) => render(ui, {
  // eslint-disable-next-line react/jsx-props-no-spreading
  wrapper: (props) => <Router {...props} {...routerProps} />,
});

test('should render NotFound', () => {
  renderWithRouter(<NotFound />);

  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title).toBeVisible();
  expect(title).toHaveTextContent(/Page not found!/);

  expect(screen.getByText(/Sorry, but we couldn't find the page you were looking for./)).toBeInTheDocument();
  expect(screen.getByText(/Try returning to/)).toBeInTheDocument();

  const toHomeLink = screen.getByRole('link');
  expect(toHomeLink).toBeInTheDocument();
  expect(toHomeLink).toBeVisible();
  expect(toHomeLink).toHaveTextContent(/home/);
});

test('Navigate to / when clicking on home link and replace history entry', () => {
  const initialPathname = '/404';
  const history = createMemoryHistory({ initialEntries: [initialPathname] });
  jest.spyOn(history, 'push');
  jest.spyOn(history, 'replace');

  renderWithRouter(<NotFound />, { history });

  expect(history.location.pathname).toEqual(initialPathname);
  expect(history.push).not.toHaveBeenCalled();

  act(() => {
    const toHomeLink = screen.getByRole('link');
    fireEvent.click(toHomeLink);
  });

  expect(history.push).not.toHaveBeenCalled();
  expect(history.replace).toHaveBeenCalledWith('/');

  expect(history.location.pathname).not.toEqual(initialPathname);
  expect(history.location.pathname).toEqual('/');
});
