import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="todoWrapper">
        <button
          className="doTodo pure-button"
          onClick={() => this.props.doTodo(this.props.index)}>
          Remove
        </button>
        <span className="todoText">{this.props.todo.text}</span>
      </div>
    )
  }
}

export default Todo;