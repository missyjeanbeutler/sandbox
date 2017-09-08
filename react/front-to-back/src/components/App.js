import React, { Component } from 'react';
import router from '../router.js';
import { Link } from 'react-router-dom';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is a full stack react app!</h1>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        { router }
      </div>
    );
  }
}

export default App;
