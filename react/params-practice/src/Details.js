import React, { Component } from 'react';
import { getPerson } from './PeepsService.js'

class Details extends Component {
  constructor(props) {
    super()
    this.state = {
      peep: {}
    }
  }

  componentDidMount() {
   getPerson(this.props.match.params.id)
    .then(res => {
      this.setState({
        peep: res.data
      })
    }) 
  }

  render() {
    return (
      <div>
        <h1>{this.state.peep.name}</h1>
        <p>Hair color: {this.state.peep.hair_color}</p>
        <p>Skin color: {this.state.peep.skin_color}</p>
        <p>Eye color: {this.state.peep.eye_color}</p>
      </div>
    )
  }
}

export default Details