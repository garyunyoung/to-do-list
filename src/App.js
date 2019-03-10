import React from "react";
import * as R from "ramda";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentValue: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
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
  };

  onClear = () => {
    this.setState({ list: [] });
  };

  render() {
    return (
      <div className="task-container">
        <form className="task-form" onSubmit={this.handleSubmit}>
          <input
            className="task-form__input"
            type="text"
            name="newTask"
            placeholder="your task here"
            autoComplete="off"
            autoFocus
            onChange={this.handleInputData}
            value={this.state.currentValue}
          />
          <input
            className="task-form__submit-button"
            type="submit"
            value="add!"
          />
        </form>
        <section className="task-list">
          <ul className="task-list__list">
            {this.state.list.map((listItem, i) => {
              return (
                <li key={i} className="task">
                  <span className="task__description">{listItem}</span>
                  <button
                    className="task__delete-button"
                    onClick={() => this.onDelete(i)}
                  >
                    x
                  </button>
                </li>
              );
            })}
            <button
              className={`task-list__clear-button ${
                this.state.list.length === 0 ? "hidden" : ""
              }`}
              onClick={this.onClear}
            >
              clear items!
            </button>
            {this.state.list.length === 0 ? (
              <p className="task-list__comment">
                there are no tasks in your list!
              </p>
            ) : null}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
