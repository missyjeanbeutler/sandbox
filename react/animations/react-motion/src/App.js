import React, { Component } from 'react';
import './App.css';
import { TransitionMotion, Motion, spring, presets } from 'react-motion';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [
        {key: 't1', data: {item: 'learn this library', checked: false}},
        {key: 't2', data: {item: 'go to Europe', checked: false}},
        {key: 't3', data: {item: 'pack', checked: false}},
        {key: 't4', data: {item: 'take my plants to my parents', checked: false}},
        {key: 't5', data: {item: 'do all the things', checked: false}},
        {key: 't6', data: {item: "don't freak out about flying", checked: false}}
      ],
      open: false
    }
  }

  getStyles = () => { // beware of memory references when changing the style object. A safe way to avoid this is by adding the style object separately for both the styles prop and the defaultStyles prop
    return this.state.todo.map(e => {
      return {...e, style:{height: spring(50, presets.gentle), opacity: spring(1, presets.gentle)}}
    })
  }

  getDefaults = () => {
    return this.state.todo.map(e => ({...e, style:{height: 0, opacity: 0}}))
  }

  submit = (e) => {
    e.preventDefault()
    const newItem = {
      key: `t${new Date()}`,
      data: {
        item: this.input.value,
        checked: false
      },
      style: {
        height: 0,
        opacity: 1
      }
    }
    this.setState({
      todo: [newItem, ...this.state.todo]
    })
    this.input.value = ''
  }

  delete = (key) => {
    this.setState({
      todo: this.state.todo.filter(e => {
        return e.key !== key
      })
    })
  }

  toggleCheckbox = (index) => {
    this.setState({
      todo: this.state.todo.map((e, i) => {
        if(i === index) e.data.checked = !e.data.checked
        return e
      }),
    })
  }

  toggleInput = () => {
    this.setState({open: !this.state.open})
  }

  willEnter() { // used with the willEnter prop, should return an object with style properties. This is like the defaultStyle props, the initial style before transitioning. 
    return {
      height: 0,
      opacity: 1
    }
  }
  
  willLeave() { // used with the willLeave prop. It's the styles that the component will be transitioned to before unmounting.
    return {
      height: spring(0),
      opacity: spring(0)
    }
  }

  render() {
    return (
      <div>
        <Motion style={{x: this.state.open ? spring(450) : spring(300)}}>
          {style => {
          return (
            <form className='form' onSubmit={this.submit} >
              <input 
                className='addInput'
                ref={(input) => this.input = input} 
                onFocus={this.toggleInput} 
                onBlur={this.toggleInput}
                style={{width: `${style.x}px`}}
                placeholder='Add a new todo item...'/>
            </form>
          )}}
        </Motion>
        <TransitionMotion 
          defaultStyles={this.getDefaults()}
          styles={this.getStyles()}
          willLeave={this.willLeave}
          willEnter={this.willEnter}>
          {styles => {
            return (
            <ul className='todo-container'>
              {styles.map(({key, data: {item, checked}, style}, i) => (
                <div key={key} style={{background: '#DDD', listStyleType: 'none', ...style}}>
                  <input className='toggle' type='checkbox' onChange={() => this.toggleCheckbox(i)}/>
                  <li className={checked ? 'todo-list completed' : 'todo-list'}>
                    {item}
                  </li>
                  <button className='delete' onClick={() => this.delete(key)}>X</button>
                </div>
              ))}
            </ul>
          )}}
        </TransitionMotion>
      </div>
    );
  }
}

export default App;
