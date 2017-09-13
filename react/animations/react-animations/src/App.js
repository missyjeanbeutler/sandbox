import React, { Component } from 'react';
import './App.css';
import { merge, fadeIn, rubberBand, bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import List from './List.js';

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
      toBounce: false,
      styles: []
    }
  }

  toggleBounce = () => {
    this.state.toBounce ? 
    this.setState({styles: [], toBounce: false}) :
    this.setState({styles: [styles.bounce], toBounce: true})
  }

  componentDidMount() {
    this.setState({
      styles: [styles.fade]
    })
  }

  render() {

    return (
      <div>
        <h2 className={css(this.state.styles)}>This is a bouncy sentence!</h2>
        <button onClick={this.toggleBounce}>toggle the bounce!</button>
        <List />
      </div>
    )
  }
}
