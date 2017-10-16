import React, { Component } from 'react';
import { login } from '../ducks/reducer';
import { connect } from 'react-redux';

class Login extends Component {

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.props.login({
      username: this.username.value,
      password: this.password.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          <input placeholder='username' 
            ref={ input => this.username = input }/>
          <input placeholder='password' 
            ref={ input => this.password = input }/>  
          <button value='submit'>Submit</button>        
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login)