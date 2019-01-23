import React, { Component } from 'react';

import store from './store/index'
class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        todolist
      </div>
    );
  }
}

export default ToDoList;
