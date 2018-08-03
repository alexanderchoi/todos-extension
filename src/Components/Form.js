import React, { Component } from 'react';

class Form extends Component {
  state = {
    inputValue: ''
  }

  addTodo = this.addTodo.bind(this);
  handleChange = this.handleChange.bind(this);
  handleKeyUp = this.handleKeyUp.bind(this);

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState( {inputValue: ''} );
    }
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.addTodo(this.state.inputValue);
    }
  }

  render() {
    return(
      <div className="Form">
        <div className="input">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            onKeyUp={ this.handleKeyUp }
            className="pure-input "
          />
        </div>
        <div className="submit">
          <button
            onClick={() => this.addTodo(this.state.inputValue)}
            className="pure-button button-secondary">
            Enter
          </button>
        </div>
      </div>
    );
  }
}

export default Form;