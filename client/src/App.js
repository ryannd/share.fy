import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/Login/Login'
import Searchpage from './components/Searchpage/Searchpage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/callback" component={Login}/>
        <Route exact path ="/search" component ={Searchpage}/>
      </Switch>
    </Router>
  );
}

export default App;
