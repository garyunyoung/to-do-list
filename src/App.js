import React from "react";
import TaskList from "./TaskList";
import * as R from "ramda";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      list: [],
      currentValue: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.focusInput();
    if (R.trim(this.state.currentValue) !== "") {
      this.setState({
        list: [...this.state.list, this.state.currentValue],
        currentValue: ""
      });
    }
  };

  handleInputData = event => {
    this.setState({ currentValue: event.target.value });
  };

  onDelete = i => {
    this.setState({ list: R.remove(i, 1, [...this.state.list]) });
    this.focusInput();
  };

  onClear = () => {
    this.setState({ list: [] });
    this.focusInput();
  };

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div className="task-container">
      <h1 className="task-header">to do list</h1>
        <form className="task-form" onSubmit={this.handleSubmit}>
          <input
            className="task-form__input"
            type="text"
            name="newTask"
            placeholder="add your task here"
            autoComplete="off"
            autoFocus
            onChange={this.handleInputData}
            value={this.state.currentValue}
            ref={this.inputRef}
          />
          <button
            className="task-form__submit"
            type="submit"
          >
          <i class="fas fa-plus task-form__submit-button"></i>
          </button>
        </form>
        <TaskList
          list={this.state.list}
          onClear={this.onClear}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
