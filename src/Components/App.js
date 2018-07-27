import React, { Component } from 'react';

import '../App.css';

import Form from './Form';
import List from './List';

const storage = window.chrome.storage.sync;

class App extends Component {
  state = {
    todos: []
  }

  addTodo = this.addTodo.bind(this);
  clearAllTodos = this.clearAllTodos.bind(this);
  doTodo = this.doTodo.bind(this);
  loadTodos = this.loadTodos.bind(this);

  componentDidMount() {
    this.loadTodos();
  }

  addTodo(todoText) {
    let todos = this.state.todos;
    todos.push({text: todoText, done: false});
    storage.set({'todos': todos});
    this.setState({ todos });
    console.log(this.state.todos);
  }

  clearAllTodos() {
    let todos = [];
    storage.set({ "todos": todos });
    this.setState({ todos });
  }

  loadTodos() {
    storage.get('todos', function (result) {
      var loadedTodos = result.todos;
      if (loadedTodos === undefined) {
        loadedTodos = [
          {text: "Gym in the Morning", done: false},
          {text: "Tan at the Pool", done: false},
          {text: "Fold the Laundry", done: false}
        ];
      }
      this.setState({ todos: loadedTodos });
    }.bind(this));
  }

  doTodo(index) {
    let todos = this.state.todos;
    todos[index].done = !todos[index].done;
    storage.set({'todos': todos});
    this.setState({ todos });
    console.log(this.state.todos);
  }

  render() {
    return (
      <div className="App">
        <div className="todosWrapper">
          <h1>TO DO LIST:</h1>
          <Form
            addTodo={this.addTodo}
          />
          <button
            onClick={this.clearAllTodos}
            class="pure-button">
            Clear All Todos
          </button>
          <List
            todos={this.state.todos}
            doTodo={this.doTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;