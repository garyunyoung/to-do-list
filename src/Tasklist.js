import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import "./TaskList.css";

export default function TaskList(props) {
  return (
    <section className="task-list">
      <ul className="task-list__list">
        {props.list.map((listItem, i) => (
          <Task
            key={i}
            description={listItem}
            onDelete={() => props.onDelete(i)}
          />
        ))}
        <button
          className={`task-list__clear-button ${
            props.list.length === 0 ? "hidden" : ""
          }`}
          onClick={props.onClear}
        >
          clear items!
        </button>
        {props.list.length === 0 ? (
          <p className="task-list__comment">there are no tasks in your list!</p>
        ) : null}
      </ul>
    </section>
  );
}

TaskList.propTypes = {
  list: PropTypes.array.isRequired,
  onClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
