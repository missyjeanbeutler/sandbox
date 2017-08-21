import React, { Component } from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'
import './App.css';
import About from './About.js';
import Home from './Home.js';
import List from './List.js';
import Team from './Team.js';
import Company from './Company.js';
import AboutLanding from './AboutLanding.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>MAIN!</h1>
      <p>This is the main page, you can click on the links and stuff....</p>
      <HashRouter>
        <div>
          <div className='navContainer'>
            <NavLink to='/home' activeClassName='activeNav' className='nav'>Home</NavLink>
            <NavLink to='/about' activeClassName='activeNav' className='nav'>About</NavLink>
            <NavLink to='/list' activeClassName='activeNav' className='nav'>List</NavLink>
          </div>
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route path='/about' render={() => (
              <About>
                <Switch>
                  <Route path='/about/team' component={Team}/>
                  <Route path='/about/company' component={Company}/>
                  <Route component={AboutLanding}/>
                </Switch>
              </About>
            )}/>
            <Route path='/list' component={List}/>
          </Switch>
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
