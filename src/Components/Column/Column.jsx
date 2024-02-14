import React from "react";
import "./Column.css";
import Task from "../Task/Task";
import { useStore } from "../../../store";
import classNames from "classnames";
import PropTypes from "prop-types"; 

const Column = ({ state }) => {
  const [text, setText] = React.useState("");
  const [open, setOpen] = React.useState("");
  const [drop, setDrop] = React.useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  const addTask = useStore((store) => store.addTask);

  const setDraggedTask = useStore((store) => store.setDraggedTask)

  const draggedTask = useStore((store) => store.draggedTask)

  const moveTask = useStore((store) => store.moveTask)

  return (
    <div
      className={classNames('column', { drop: drop})}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault()
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTask(draggedTask,state);
        setDraggedTask(null);
        e.preventDefault();
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Column.propTypes = {
  state: PropTypes.string.isRequired,
};

export default Column;
