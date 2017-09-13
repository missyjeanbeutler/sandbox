import React, { Component } from 'react';
import './App.css';
import { TransitionMotion, spring, presets } from 'react-motion';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [
        {key: 't1', data: {item: 'learn this library', checked: false}, style: {height: 0, opacity: 1}},
        {key: 't2', data: {item: 'go to Europe', checked: false}, style: {height: 0, opacity: 1}},
        {key: 't3', data: {item: 'pack', checked: false}, style: {height: 0, opacity: 1}},
        {key: 't4', data: {item: 'take my plants to my parents', checked: false}, style: {height: 0, opacity: 1}},
        {key: 't5', data: {item: 'do all the things', checked: false}, style: {height: 0, opacity: 1}},
        {key: 't6', data: {item: "don't freak out about flying", checked: false}, style: {height: 0, opacity: 1}}
      ]
    }
  }

  getStyles() {
    const styles = this.state.todo.map(e => {
      e.style= {height: spring(60, presets.gentle), opacity: spring(1, presets.gentle)};
      return e
    })
    console.log(styles)
    return styles;
  }

  getDefaults() {
    console.log('default styles')
    return this.state.todo.slice(0)
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

  willLeave() {
    return {
      height: spring(0, presets.gentle),
      opacity: spring(0, presets.gentle)
    }
  }

  willEnter() {
    return {
      height: 0,
      opacity: 1
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input ref={(input) => this.input = input}/>
        </form>
        <TransitionMotion 
          defaultStyles={this.getDefaults()}
          styles={this.getStyles()}
          willLeave={this.willLeave}
          willEnter={this.willEnter}>
          {styles => (
            <ul>
              {styles.map(({key, data: {item, checked}, style}) => (
                <div key={key} style={{background: '#DDD', listStyleType: 'none', ...style}}>
                  <li>
                    {item}
                  <button onClick={() => this.delete(key)}>delete</button>
                  </li>
                </div>
              ))}
            </ul>
          )}
        </TransitionMotion>
        
      </div>
    );
  }
}

export default App;
