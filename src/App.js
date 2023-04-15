import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Message: </h1>
        </Route>
        <Route path="/greeting">
          <Greeting />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
