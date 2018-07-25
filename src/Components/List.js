import React, { Component } from 'react';
import Todo from './Todo';

class List extends Component {
  render() {
    return (
      <div className="List">
        {this.props.todos.map((todo, index) =>
          !todo.done ?
            <Todo
              key={index}
              index={index}
              todo={todo}
              removeTodo={this.props.removeTodo}
            />
            : null
        )}
      </div>
    )
  }
}

export default List;