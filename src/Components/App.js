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
    console.log(this.todos);
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

  doTodo(index) {
    let todos = this.state.todos;
    todos[index].done = !todos[index].done;
    storage.set({'todos': todos});
    this.setState({ todos });
    console.log(this.state.todos);
  }

  loadTodos() {
    storage.get('todos', function (result) {
      var loadedTodos = result.todos;
      if (loadedTodos === [] || undefined) {
        loadedTodos = [
          {text: "Gym in the Morning", done: false},
          {text: "Tan at the Pool", done: false},
          {text: "Fold the Laundry", done: false}
        ];
      }
      this.setState({ todos: loadedTodos });
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <div className="todosWrapper">
          <div className="todoHeader">
          <h1>TO</h1>
          <h1>DO</h1>
          </div>
          <Form
            addTodo={this.addTodo}
          />
          <List
            todos={this.state.todos}
            doTodo={this.doTodo}
          />
          {/* <div className="clearAllWrapper">
          <button
            onClick={this.clearAllTodos}
            className="clearAllButton pure-button">
            Clear All
          </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;