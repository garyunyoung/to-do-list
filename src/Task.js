import React from "react";
import PropTypes from "prop-types";
import "./Task.css";

export default function Task(props) {
  return (
    <li className="task">
      <span className="task__description">{props.description}</span>
      <button className="task__delete-button" onClick={props.onDelete}>
      <i class="fas fa-check"></i>
      </button>
    </li>
  );
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
