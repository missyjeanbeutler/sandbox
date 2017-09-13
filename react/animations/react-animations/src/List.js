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
    animationDuration: '1s'
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
    document.getElementById(i).className = css(styles.out)
    const items = [...this.state.items]
    setTimeout(() => { // so far this is the only solution I can find to have a transition that works before it's removed from this list WITHOUT using react-transition-group. I feel like it's a terrible solution.
      items.splice(i, 1)
      this.setState({
        items: items
      })
    }, 1000)
  }

  componentDidMount() {
    this.setState({
      styles: [styles.in] // I put this here so that it would only fadein on pageload
    })
  }

  render() {

    const items = this.state.items.map((e, i) => (
      <div className={css(this.state.styles)} key={i} id={i}>
        <p>{e}</p>
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
