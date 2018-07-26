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
  removeTodo = this.removeTodo.bind(this);
  loadTodos = this.loadTodos.bind(this);

  componentDidMount() {
    this.loadTodos();
  }

  addTodo(todoText) {
    let newTodos = this.state.todos;
    newTodos.push({text: todoText, done: false});
    this.setState({ todos: newTodos });
    storage.set({'todos': newTodos});
    storage.get('todos', function(result) {
      console.log(result.todos);
    })
  }

  loadTodos() {
    var loadedTodos;
    storage.get('todos', function (result) {
      loadedTodos = result.todos;
      console.log(result.todos);
    });
    if (loadedTodos = {}) {
      loadedTodos = [
        {text: "Gym in the Morning", done: false},
        {text: "Tan at the Pool", done: false},
        {text: "Fold the Laundry", done: false}
    ];
    }
    console.log(`loadedTodos = ${loadedTodos}`);
    this.setState({ todos: loadedTodos });
  }

  removeTodo(index) {
    let todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
    storage.set({'todos': todos});
    storage.get('todos', function(result) {
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