import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {text: "Gym in the Morning", done: false},
        {text: "Tan at the Pool", done: false},
        {text: "Fold the Laundry", done: false}
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos;
    todos.push({text: todoText, done: false});
    this.setState({ todos });
  }

  removeTodo(index) {
    let todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  render() {
    return (
      
      <div className="App">
      <div>
        <input id="testInput" type="text" placeholder="Your Name">
        </input>
        <button
          id="testSubmit"
          onClick={function() {
            var value = document.getElementById("testInput").value;
            console.log(value);
          }}
        >
          Submit Name
        </button>
      </div>
        <div className="todosWrapper">
          <h1>TO DO LIST:</h1>
          <Form
            addTodo={this.addTodo}
          />
          <List
            todos={this.state.todos}
            removeTodo={this.removeTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;