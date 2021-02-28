import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/Landing'
import Login from './components/Login/Login'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/callback" component={Login}/>
        <Route exact path="/test/profile" component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
