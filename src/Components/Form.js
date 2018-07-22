import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({inputValue: ''});
    }
  }

  render() {
    return(
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={() => this.addTodo(this.state.inputValue)}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;