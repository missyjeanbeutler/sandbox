import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: '',
      user: '',
      userInput: '',
      submitted: ''
    }
    this.getting = this.getting.bind(this)
    this.checkUser = this.checkUser.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.submit = this.submit.bind(this)
  }

  getting() {
    return axios.get('/getting').then(res => {
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

  updateInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  submit() {
    return axios.post('/posting', {data: this.state.userInput}).then(res => {
      this.setState({
        submitted: res.data,
        userInput: ''
      })
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
        <button onClick={this.getting}>click me to test</button>
        <p>{this.state.data ? this.state.data : 'the data will go here!'}</p>
        {this.state.user ? null : <a href='http://localhost:3000/auth'><button>login</button></a>}
        {this.state.user ? <a href='http://localhost:3000/auth/logout'><button>logout</button></a> : null}

        <p>{this.state.user ? this.state.user : 'no user logged in'}</p>
        <input value={this.state.userInput} onChange={this.updateInput}/>
        <button disabled={!this.state.user} onClick={this.submit}>{this.state.user ? 'Submit!' : 'Gotta log in first to submit'}</button>
        <p>{this.state.submitted}</p>
      </div>
    );
  }
}

export default App;
