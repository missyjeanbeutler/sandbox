import React, { Component } from 'react';
import { getUsers, addUser, deleteUser } from '../../services/users.js';
import { Link } from 'react-router-dom';

export default class Users extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this)
  }

  add() {
    let name = this.name.value,
        age = this.age.value,
        email = this.email.value;
    addUser({name, age, email}).then(res => {
      getUsers().then(users => {
        this.setState({
          users: users
        })
      })
    })
  }

  delete(id) {
    deleteUser(id).then(res => {
      this.setState({
        users: res
      })
    })
  }

  componentDidMount() {
    getUsers().then(users => {
      this.setState({
        users: users
      })
    })
  }

  render() {

    const users = this.state.users.map((e, i) => {
      return (
        <div key={i}>
          <Link to={`/users/${e.id}`}>
            <p>{e.name}</p>
          </Link> 
          <button onClick={() => this.delete(e.id)}>delete user</button>
        </div>
      )
    })

    return (
      <div>
        <h3>Add new user:</h3>
        <input placeholder='Name...' ref={(input) => this.name = input}/>
        <input placeholder='Age...' ref={(input) => this.age = input}/>
        <input placeholder='Email...' ref={(input) => this.email = input}/>
        <button onClick={this.add}>Add User</button>
        <h3>All the Users!</h3>
        { users }
      </div>
    )
  }
}