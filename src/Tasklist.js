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
        <ClearButton list={props.list} onClear={props.onClear} />
        <EmptyListComment visible={props.list.length === 0} />
      </ul>
    </section>
  );
}

function ClearButton(props) {
  const buttonState = props.list.length === 0 ? "hidden" : "";
  return (
    <button
      className={`task-list__clear-button ${buttonState}`}
      onClick={props.onClear}
    >
      clear items!
    </button>
  );
}

function EmptyListComment(props) {
  if (!props.visible) return null;
  return <p className="task-list__comment">there are no tasks in your list!</p>;
}

TaskList.propTypes = {
  list: PropTypes.array.isRequired,
  onClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
