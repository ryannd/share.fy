import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/Landing'
import Login from './components/Login/Login'
import Compare from './components/Compare/Compare'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/callback" component={Login}/>
        <Route exact path="/compare" component={Compare}/>
      </Switch>
    </Router>
  );
}

export default App;
