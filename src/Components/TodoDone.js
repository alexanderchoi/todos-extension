import React, { Component } from 'react';

class TodoDone extends Component {
  render() {
    return (
      <div
        className="todoWrapper"
        onClick = {() => this.props.doTodo(this.props.index)}
      >
        <button
          className="pure-button"
          onClick={() => this.props.doTodo(this.props.index)}>
          Remove
        </button>
        <span
          className="todoText todoTextDone">{this.props.todo.text}</span>
      </div>
    )
  }
}

export default TodoDone;