import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/Login/Login'
import Searchpage from './components/Searchpage/Searchpage'
import Compare from './components/Compare/Compare'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/callback" component={Login}/>
        <Route exact path ="/search" component ={Searchpage}/>
        <Route exact path="/compare" component={Compare}/>
      </Switch>
    </Router>
  );
}

export default App;
