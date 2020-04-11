import React, { Fragment } from 'react';
import Home from './pages/Home/Home';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/:filmId?">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
