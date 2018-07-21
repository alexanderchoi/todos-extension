import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(newValue) {
    this.setState({value: newValue.target.value});
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return(
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={() => this.addTodo(this.state.value)}>
          Submit
        </button>
      </div>
    );
  }
}