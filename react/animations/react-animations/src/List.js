import React, { Component } from 'react';
import { fadeIn, fadeOut } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  in: {
    animationName: fadeIn,
    animationDuration: '2s'
  },
  out: {
    animationName: fadeOut,
    animationDuration: '2s'
  }
})

export default class List extends Component {

  constructor() {
    super()
    this.state = {
      items: ['animations', 'in', 'react', "shouldn't", 'be', 'this', 'frustrating'],
      styles: []
    }
  }

  addItem = () => {
    this.setState({
      items: [...this.state.items, this.newItem.value]
    })
    this.newItem.value = ''
  }

  deleteItem = (i) => {
    const items = [...this.state.items]
    items.splice(i, 1)
    this.setState({
      items: items
    })
  }

  componentDidMount() {
    this.setState({
      styles: [styles.in]
    })
  }

  render() {

    const items = this.state.items.map((e, i) => (
      <div className={css(this.state.styles)} key={i}>
        <h2>{e}</h2>
        <button onClick={() => this.deleteItem(i)}>delete this item</button>
      </div>
    ))

    return (
      <div>
        <input ref={(input) => this.newItem = input} placeholder='add a new item...'/>
        <button onClick={this.addItem}>Add new item</button>
        {items}
      </div>
    )
  }
}
