spring(val [, config]) => OpaqueConfig (returned result from spring())
- Only works with numbers. If you want to animate colors, you must use a number like RGB or HSL
- val - the value, a number. The ending value.
- config - optional for more adjustments where you can specify damping and stiffness
-  { stiffness: default 170, 
	 dampness: default 26,
	 precision: default 0.01 }
    - Can use presets that come with library - presets.wobbly, etc… 

## Motion
- Allows you to animate components within a page between style states
- Children passed to this component should be a function that should render a component. That function’s argument is the style that should be used to render that component at that point in time. 
- You can control the initial state with defaultStyle prop
```
  <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
    { (style) => <div style={style}>Can you see me?</div> }
 </Motion>
 ```
- Props: 
    - style: required. Object that maps to a number or OpaqueConfig that’s returned by spring(). Keys must stay the same. Keys are usually css properties that are being affected by the animation.
    - defaultStyle: optional. The default starting styles. 
    - onRest: optional. A callback that fires when the animation completes.
interpolation is a method of constructing new data points within the range of a discrete set of known data points.

## TransitionMotion

- Animates components as they mount and unmount
- Props: 
    - styles: required. Should be an array of objects. Each object needs various props. 
        - A key property
        - A style property. The style property is an object that has the styles that should be animated (like the style property in the motion tag). 
        - A data property. The data to pass to the rendered object. 
        - Styles can also be a function. That function will receive the config array from the previous rendering and will return an updated config array ????
    - defaultStyles: optional. Similar to the style prop just with starting styles.
    - willLeave: optional. Takes a function. Animates a leaving component. How? When an object with a known key is no longer in the styles array, it will pass the last known configuration object for that style to the willLeave function. The function should return a style object of properties that the component should animate before being removed from the DOM.
```
const willLeave = () => ({
  borderWidth: spring(0)
})
```
  - willEnter: optional. Similar to willLeave but animates an entering component.

- Expects a function as it’s children prop. The argument passed:
    - An array of objects with these properties:
        - Key
        - Style
        - Data 
    - The function should iterate over the array and return a react element for each item in the array. 
```
{(styles) => (
      <div>
        { styles.map(({ key, style, data}) => (
          <div key={key} style={{
            borderColor: 'black',
            borderStyle: 'solid',
            ...style
          }}>{ data }</div>
        ))}
      </div>
   )}
```