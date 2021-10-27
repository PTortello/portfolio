import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Projects from '../../pages/Projects';
import NavBar from '../NavBar';
import Navi from '../Navi';

function App() {
  return (
    <>
      <NavBar />
      <Navi />
      <Switch>
        <Route path='/home' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/projects' component={ Projects } />
        <Redirect to='/home' />
      </Switch>
    </>
  );
}

export default withRouter(App);
