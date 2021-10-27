import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import NavBar from '../NavBar';
import Navi from '../Navi';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/home' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/projects' component={ Projects } />
        <Redirect to='/home' />
      </Switch>
      <Navi />
    </>
  );
}

export default withRouter(App);
