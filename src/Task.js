import React from "react";
import "./Task.css";

export default function Task(props) {
  return (
    <li className="task">
      <span className="task__description">{props.description}</span>
      <button className="task__delete-button" onClick={props.onDelete}>
        x
      </button>
    </li>
  );
}
