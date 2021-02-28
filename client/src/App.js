import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/Landing'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/callback" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
