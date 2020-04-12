import React from 'react';
import Home from './pages/Home/Home';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/:filmId?">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
