import React, { Component } from 'react';
import './App.css';
import { merge, fadeIn, rubberBand, bounce } from 'react-animations'; // import whatever animation you would like by it's name
import { StyleSheet, css } from 'aphrodite'; // this is needed to implement the animation
import List from './List.js';

const myCustomKeyframe = {
  'from': {
    fontSize: '8px'
  },
  'to': {
    fontSize: '24px'
  }
}

const styles = StyleSheet.create({  // you reference the style object by styles.bounce or whatever you decide to name the property in the object that the create method takes. There are various examples of what you can do with react animations and aphrodite together. Merge is limited, it won't work if both animations are affecting the same css properties with transitions. Example: fadeIn and fadeOut both use opacity.
  bounce: {
    animationName: merge(rubberBand, bounce),
    animationDuration: '2s',
    animationIterationCount: 'infinite'
  },
  fade: {
    animationName: fadeIn,
    animationDuration: '2s'
  },
  hover: {
    ':hover': { // can use pseudo selectors. However, you cannot use animationDuration here as that only works with keyframes. I added a style to the element below in the return and added a css transition there for the hover
      color: 'red' 
    } 
  },
  customKeyframe: { // to create your own custom keyframe, declare it, reference it and use how you would with react-animations. You can also combine difference keyframes into one style by putting them in an array with the animationName property 
    animationName: myCustomKeyframe,
    animationDuration: '2s'
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
    this.setState({styles: [styles.hover], toBounce: false}) :
    this.setState({styles: [styles.bounce, styles.hover], toBounce: true})
  }

  componentDidMount() {
    this.setState({
      styles: [styles.fade, styles.hover, styles.customKeyframe]
    })
  }

  render() {
    // below in className, it's set equal to a function from aphrodite, css. Inside you place the styles that were created with StyleSheet.create(). Multiple are separated with a comma.
    return (
      <div>
        <h2 className={css(this.state.styles)} style={{transition: 'color 0.5s ease'}}>This is a bouncy sentence!</h2>
        <button onClick={this.toggleBounce}>toggle the bounce!</button>
        <List />
      </div>
    )
  }
}
