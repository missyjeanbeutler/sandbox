import React, { Component } from 'react';
import { getPeople } from './PeepsService.js';
import { Link } from 'react-router-dom';


export default class Peeps extends Component {

  constructor(props) {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    getPeople(1).then(res => {
      this.setState({people: res.data.results})
    })
  }

  render() { 
    const people = this.state.people.map((e, i) => (
      <div key={i}>
        <Link to={`/peeps/${i + 1}`}>{e.name}</Link> 
      </div>
    ))
    return (
      <div>
        <h1>Here are all the peeps</h1>
        {people}

      </div>
    )
  }
}