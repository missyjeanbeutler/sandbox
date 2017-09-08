import React, { Component } from 'react';
import { getDetails } from '../../services/users.js';

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    getDetails(this.props.match.params.id).then(user => {
      this.setState({
        user: user[0]
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Name: { this.state.user.name }</h2>
        <h2>Age: { this.state.user.age }</h2>
        <h2>Email: { this.state.user.email }</h2>
      </div>
    )
  }

}