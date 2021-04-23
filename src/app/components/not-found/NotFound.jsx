import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>Page not found!</h1>

    <p>Sorry, but we couldn&apos;t find the page you were looking for.</p>
    <p>
      Try returning to&nbsp;
      <Link to="/" replace>home</Link>
    </p>
  </>
);

export default NotFound;
