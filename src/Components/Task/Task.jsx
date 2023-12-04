import React from "react";
import "./Task.css";
import classNames from "classnames";

const STATUS = "ONGOING";

const Task = ({ title }) => {
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames('status', STATUS)}>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;
