import React, { useState } from "react";

export default function Todolist(props) {
  const [taskList, setTaskList] = useState("");
  const [tasks, setTasks] = useState("");
  const [isediting, setEditing] = useState(false);
  function EditTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <li className="todo stack-small">
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn toggle-btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn-outline-danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
