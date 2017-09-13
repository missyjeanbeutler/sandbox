import React, { Component } from 'react';
import './App.css';
import { merge, fadeIn, fadeOut, rubberBand, bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bounce: {
    animationName: merge(rubberBand, bounce),
    animationDuration: '2s',
    animationIterationCount: 'infinite'
  }
})

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      items: ['this', 'is', 'a', 'bouncy', 'sentence'],
      toBounce: false
    }
  }

  bounceButton = () => {
    this.setState({toBounce: !this.state.toBounce})
  }

  render() {

    const s = this.state.toBounce ? css(styles.bounce) : null

    const items = this.state.items.map((e, i) => (
      <h2 className={s} key={i}>{e}</h2>
    ))

    return (
      <div>
        {items}
        <button onClick={this.bounceButton}>toggle the bounce!</button>
      </div>
    )
  }
}
