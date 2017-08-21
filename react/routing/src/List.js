import React, { Component } from 'react';
import Detail from './Detail.js';

export default class List extends Component {
  constructor() {
    super()
    this.state = {
      list: ['one', 'two', 'three']
    }
  }

  render() {
    const list = this.state.list.map((e, i) => {
      return <Detail item={e} key={i} />
    })
    return (
      <div>
        <h1>This is the list!</h1>
        {list}
      </div>
    )
  }

}