import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Users from './components/Users/Users.js';
import Details from './components/Details/Details.js';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/users/:id' component={ Details }/>
    <Route path='/users' component={ Users } />
  </Switch>
)