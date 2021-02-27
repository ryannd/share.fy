import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/Landing'
import Login from './components/Login/Login'
import User from './components/User/User'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/callback" component={Login}/>
        <Route exact path="/user" component={User}/>
      </Switch>
    </Router>
  );
}

export default App;
