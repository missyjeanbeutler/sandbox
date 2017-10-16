import React, { Component } from 'react';
import { addUser } from '../ducks/reducer';
import { connect } from 'react-redux';

class NewUser extends Component {

  handleUserSubmit = (e) => {
    e.preventDefault()
    this.props.addUser({
      name: this.name.value,
      age: this.age.value,
      email: this.email.value 
    })
  }

  render() {
    return (
      <div>
        <h1>There is no user</h1>
        <h2>Add user:</h2>
        <form onSubmit={this.handleUserSubmit}>
          <input placeholder='Name' 
            ref={input => this.name = input}/>
          <input placeholder='Age' 
            ref={input => this.age = input}/>
          <input placeholder='Email' 
            ref={input => this.email = input}/>
          <input placeholder='Username' 
            ref={input => this.username = input}/>
          <input placeholder='Password' 
            ref={input => this.password = input}/>
          <button input='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addUser: addUser })(NewUser);