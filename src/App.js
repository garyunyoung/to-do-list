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
    const newTask = this.newTask.value;

    this.setState({
      list: [...this.state.list, newTask]
    });
  };

  handleInputData = event => {
    this.setState({ ...this.state, currentValue: event.target.value });
  };

  render() {
    return (
      <div className="task-container">
        <form className="task-form" onSubmit={this.handleSubmit}>
          <input
            className="task-input"
            type="text"
            name="newTask"
            placeholder="Your task here"
            ref={input => (this.newTask = input)}
            onChange={this.handleInputData}
          />
          {/* <input className="submit-button" type="submit" value="Add task!"
          /> */}
        </form>
        <section className="task-table">
          <ul className="task-list">
            {this.state.list.map(listItem => {
              return <li className="task-list__item">{listItem}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
