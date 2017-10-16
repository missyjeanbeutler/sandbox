import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewUser from './components/NewUser';
import Profile from './components/Profile';
import Login from './components/Login';

class App extends Component {
  render() {

    return (
      <div>
         { this.props.user.name ? <Profile /> : 
         <div>
            <NewUser />
            <h2>Or....</h2>
            <Login />
         </div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
