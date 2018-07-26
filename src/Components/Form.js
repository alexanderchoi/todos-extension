import React, { Component } from 'react';

class Form extends Component {
  state = {
    inputValue: ''
  }

  addTodo = this.addTodo.bind(this);
  handleChange = this.handleChange.bind(this);

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({inputValue: ''});
    }
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return(
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button
          onClick={() => this.addTodo(this.state.inputValue)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Form;