import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="task-container">
        <input
          className="task-input"
          type="text"
          name="name"
          placeholder="Your task here"
        />
        <section className="task-table">
          <ul className="task-list">
            <li className="task-list__item">Design React.js app</li>
            <li className="task-list__item">Make React.js app</li>
            <li className="task-list__item">Finish React.js app</li>
          </ul>
        </section>
      </div>
    );
  }
}


export default App;
