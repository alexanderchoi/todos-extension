import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="todoWrapper">
        <button
          className="doTodo"
          onClick={() => this.props.doTodo(this.props.index)}
          >
          Remove
        </button>
        {this.props.todo.text}
      </div>
    )
  }
}

export default Todo;