import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: '',
      user: ''
    }
    this.testing = this.testing.bind(this)
    this.checkUser = this.checkUser.bind(this)
  }

  testing() {
    return axios.get('/testing').then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  checkUser() {
    return axios.get('/auth/me').then(res => {
      if(res) {
        this.setState({
          user: res.data.nickname
        })
      }
    })
  }

  componentDidMount() {
    this.checkUser() 
  }
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.testing}>click me to test</button>
        <p>{this.state.data.length > 0 ? this.state.data : 'the data will go here!'}</p>
        <a href='http://localhost:3000/auth'><button>login</button></a>
        <p>{this.state.user.length > 0 ? this.state.user : 'no user logged in'}</p>
      </div>
    );
  }
}

export default App;
