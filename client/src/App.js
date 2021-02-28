import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/Login/Login'
import Landing from './components/Landing'
import Searchpage from './components/Searchpage/Searchpage'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/callback" component={Login}/>
        <Route exact path="/" component={Landing}/>
        <Route exact path ="/search" component ={Searchpage}/>
      </Switch>
    </Router>
  );
}

export default App;
