import React, { Component } from 'react';

import store from './store/index'
class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(
      this.handleStoreChange
    )
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  render() {
    return (
      <div className="App">
      <input type='text' value={this.state.inputValue} onChange={this.handleInputChange} />
        todolist
      </div>
    );
  }
  handleInputChange(e) {
    console.log(e.target.value)
    const action = {
      type: 'change_input_value',
      value: 1
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    console.log('store改变啦')
  }
}

export default ToDoList;
