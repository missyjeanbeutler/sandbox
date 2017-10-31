import React, { Component } from 'react';
import { getDetails, updateUser } from '../../services/users.js';

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
    this.updateUserFunction = this.updateUserFunction.bind(this)
  }

  componentDidMount() {
    getDetails(this.props.match.params.id).then(user => {
      this.setState({
        user: user[0]
      })
    })
  }

  updateUserFunction() {
    let s = this.state.user
    let user = {
      name: this.name.value ? this.name.value : s.name,
      age: this.age.value ? this.age.value : s.age,
      email: this.email.value ? this.email.value : s.email
    }
    updateUser(user, this.state.user.id).then(res => {
      this.setState({
        user: res[0]
      })
      alert('success!')
    })
  }

  render() {
    return (
      <div>
        <h2>Name:</h2>
        <input 
            placeholder={ this.state.user.name }
            ref={(input) => this.name = input}/>
        <h2>Age:</h2>
        <input 
            placeholder={ this.state.user.age }
            ref={(input) => this.age = input}/>
        <h2>Email:</h2>
        <input 
            placeholder={ this.state.user.email }
            ref={(input) => this.email = input}/>
        <br />
        <button onClick={this.updateUserFunction}>UPDATE</button>
      </div>
    )
  }

}