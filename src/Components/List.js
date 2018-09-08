import React, { Component } from 'react';

import Todo from './Todo';
// import TodoDone from './TodoDone';

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
              doTodo={this.props.doTodo}
            />
            : null
            // <TodoDone
            //   key={index}
            //   index={index}
            //   todo={todo}
            //   doTodo={this.props.doTodo}
            // />
        )}
      </div>
    )
  }
}

export default List;