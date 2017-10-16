import React, { Component } from 'react';
import { addFav } from '../ducks/reducer';
import { connect } from 'react-redux';

class Profile extends Component {

  handleFavsSubmit = (e) => {
    e.preventDefault()
    this.props.addFav(this.favorite.value)
    this.favorite.value = ''
  }

  render() {

    let { favorites, name, age, email } = this.props.user;
    
    const favs = favorites.map((e, i) => (
      <div key={i}>
        <p>{e}</p>
      </div>
    ))

    return (
      <div>
        <h1>{ name }</h1>
        <h2>{ age }</h2>
        <h2>{ email }</h2>
        <h2>{ favs[0] ? 'Favorites' : 'No Favorites Yet...'}</h2>
        <form onSubmit={this.handleFavsSubmit}>
          <input placeholder='add favorite'
            ref={input => this.favorite = input}/>
        </form>
        { favs }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const actionCreators = {
  addFav: addFav
}

export default connect(mapStateToProps, actionCreators)(Profile);