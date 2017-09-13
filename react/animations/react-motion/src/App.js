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

  getStyles = () => {
    return this.state.todo.map(e => {
      return {...e, style:{height: spring(60, presets.gentle), opacity: spring(1, presets.gentle)}}
    })
  }

  getDefaults = () => {
    return this.state.todo.map(e=> ({...e, style:{height: 0, opacity: 0}}))
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
    const newTodos = this.state.todo.filter(e => {
      return e.key !== key
    })
    this.setState({
      todo: newTodos
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

  willEnter() {
    return {
      height: 0,
      opacity: 1
    }
  }
  
  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0)
    }
  }

  render() {
    return (
      <div>
        <Motion defaultStyle={{x: 0}} style={{x: this.state.open ? spring(200) : spring(100)}}>
          {style => {
          return (
            <form onSubmit={this.submit} style={{width: `${style.x}px`}}>
              <input ref={(input) => this.input = input} onFocus={this.toggleInput} onBlur={this.toggleInput}
              style={{width: `${style.x}px`}}/>
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
            <ul>
              {
                styles.map(({key, data: {item, checked}, style}, i) => (
                <div key={key} style={{background: '#DDD', listStyleType: 'none', ...style}}>
                  <li className={checked ? 'todo-list completed' : 'todo-list'}>
                    {item}
                    <button onClick={() => this.delete(key)}>delete</button>
                    <input type='checkbox' onChange={() => this.toggleCheckbox(i)}/>
                  </li>
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
