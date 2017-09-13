import React, { Component } from 'react';
import './App.css';
import { merge, fadeIn, fadeOut, rubberBand, bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bounce: {
    animationName: merge(rubberBand, bounce),
    animationDuration: '2s',
    animationIterationCount: 'infinite'
  },
  fade: {
    animationName: fadeIn,
    animationDuration: '3s'
  }
})

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      items: ['this', 'is', 'a', 'bouncy', 'sentence'],
      toBounce: false,
      styles: [styles.fade]
    }
  }

  toggleBounce = () => {
    this.setState({styles: styles.bounce})
  }

  render() {

    const s = this.state.toBounce ? css(styles.bounce, styles.fade) : css(styles.fade)

    const items = this.state.items.map((e, i) => (
      <h2 className={css(this.state.styles)} key={i}>{e}</h2>
    ))

    return (
      <div>
        {items}
        <button onClick={this.toggleBounce}>toggle the bounce!</button>
      </div>
    )
  }
}
