import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import AuthContextProvider from './components/AuthContextProvider';
import Home from './components/home/Home';
import Login from './components/login/Login';
import NotFound from './components/not-found/NotFound';
import './App.scss';

const App = () => (
  <AuthContextProvider>
    <Router basename="/coffee-brewing-buddy">
      <div className="app">
        <header className="app-header">
          <h1>Coffee Brewing Buddy</h1>
        </header>

        <main className="app-main">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
            <Route path="/404" exact component={NotFound} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </main>

        <footer className="app-footer">
          <p>...</p>
        </footer>
      </div>
    </Router>
  </AuthContextProvider>
);

export default App;
