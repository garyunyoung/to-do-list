import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentValue: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.currentValue],
      currentValue: ""
    });
  };

  handleInputData = event => {
    this.setState({ currentValue: event.target.value });
  };

  onDelete = i => {
    let modifiedTaskList = [...this.state.list];
    modifiedTaskList.splice(i, 1);
    this.setState({ list: modifiedTaskList });
  };

  render() {
    return (
      <div className="task-container">
        <form className="task-form" onSubmit={this.handleSubmit}>
          <input
            className="task-input"
            type="text"
            name="newTask"
            placeholder="your task here"
            onChange={this.handleInputData}
            value={this.state.currentValue}
          />
          <input className="submit-button" type="submit" value="add!" />
        </form>
        <section className="task-table">
          <ul className="task-list">
            {this.state.list.map((listItem, i) => {
              return (
                <li key={i} className="task-list__item">
                  {listItem}
                  <button
                    className="delete-button"
                    onClick={() => this.onDelete(i)}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
