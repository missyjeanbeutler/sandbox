TweenLite.to() // changes to something from original styling. Destination values.
TweenLite.from() // changes from something to original styling. Starting values.
// because this is javascript, you can't use snake case but have to convert css properties to camelCase

// += or -= treats the value relative to where it is at the time the tween is rendered. Make sure this is in quotes unlike a regular number.

// use an array to target multiple values or just use a class and jQuery

EASING
https://greensock.com/ease-visualizer

// you can assign the tween to a variable and then use it whenever you want
play() // optional seconds parameter
pause()
resume()
restart()
reverse() // optional seconds parameter

// TIMELINE
// var tl = new TimelineLite({paused:true}); 
// chain tweens onto tl
// controls percise animations

//REACT - this.getDOMNode() in componentDidMount() to be able to use GSAP --- https://egghead.io/lessons/react-using-tweenmax-with-react
