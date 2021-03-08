import React from 'react';
import { coffeeService } from './service/coffee/CoffeeService';
import './App.scss';

function App() {
  const [coffeeBrewings, setCoffeeBrewings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const getCoffeeBrewings = () => {
    setLoading(true);

    coffeeService.findAll()
      .then(response => {
        setError(false);
        setCoffeeBrewings(response);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  React.useEffect(getCoffeeBrewings, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Coffee Brewing Buddy</h1>
      </header>
      <main className="app-main">
        <p>Web app for tracking coffee brewing</p>

        {error ? <span data-id="error-message">ERROR !</span> :
          loading ? <span data-id="loading-message">Loading...</span> :
            <ul>
              {coffeeBrewings.map((brewing, index) =>
                <li key={index}>
                  {brewing.data.brand} - {brewing.data.type} - {new Date(brewing.data.createdAt).toISOString()}
                </li>
              )}
            </ul>
        }
      </main>
      <footer className="app-footer">
        <p>...</p>
      </footer>
    </div>
  );
}

export default App;
