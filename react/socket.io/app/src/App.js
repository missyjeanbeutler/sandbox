import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
let socket = io(`http://localhost:3000/`)

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [{message: 'yup'}],
      userInput: ''
    }
    this.updateInput = this.updateInput.bind(this)
    this.sendTest = this.sendTest.bind(this)
  }

  componentDidMount() {
    socket.on('from:server', d => {
      this.setState({
        data: [...this.state.data, d]
      })
    })
  }

  updateInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  sendTest() {
    socket.emit('from:react', {message: this.state.userInput})
    this.setState({userInput: ''})
  }

  render() {
    const messages = this.state.data.map((e, i) => {
      return (
        <p key={i}>{e.message}</p>
      )
    })
    return (
      <div className="App">
        <div className="App-header">
          <h1>React + Socket.io</h1>
        </div>
        <p className="App-intro">
          Here you can send a message:
        </p>
        <input onChange={this.updateInput} value={this.state.userInput} placeholder='Start here... '/>
        <button onClick={this.sendTest}>Send message</button>
        <p>Here are the messages so far...</p>
        {messages}
      </div>
    );
  }
}

export default App;
