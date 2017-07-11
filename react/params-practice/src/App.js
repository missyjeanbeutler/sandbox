import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Peeps from './Peeps.js';
import Details from './Details.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          {/* anything from react-router-dom has to be in hashrouter or it breaks?? */}
          <div>
            <div className="App-header">
              <h2>People of Star Wars</h2> 
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='/peeps'>See the Peeps</Link>
            </div>
            <Route exact path='/' component={Home}/>
            <Switch>
              <Route path='/peeps/:id' component={Details}/> 
              <Route path='/peeps' component={Peeps}/>
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
