import React, { Component } from 'react';

import '../App.css';

import Form from './Form';
import List from './List';

const storage = window.chrome.storage;

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
    storage.sync.set({'todos': todos});
    storage.sync.get('todos', function(result) {
      console.log(result.todos);
    })
  }

  removeTodo(index) {
    let todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
    storage.sync.set({'todos': todos});
    storage.sync.get('todos', function(result) {
      console.log(result.todos);
    })
  }

  render() {
    return (
      <div className="App">
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