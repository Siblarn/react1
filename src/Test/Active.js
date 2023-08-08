import ReactDOM from "react";
import React, { useState } from "react";
import Todolist from "./Todolist";

export default function Active(props) {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(props.tasks);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.addTask(name);
    setName("");
  }
  function addTask(name) {
    const newTask = { id: "id", name, completed: false };
    setTasks([...tasks, newTask]);
  }
  return (
    <div>
      <div>
        ♥ Active Work!
        <div>
          <Todolist name="Work 1" completed={true} id="todo-0" />
          <input
            type="text"
            id="new-todo-input"
            className="input input__sm"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            placeholder="Staff Name"
          />
          <button type="submit" className="btn toggle-btn btn__sm">
            submit
          </button>
          <button type="submit" className="btn toggle-btn btn__sm">
            cancel
          </button>
        </div>
        <div>
          <Todolist name="Work 2" completed={true} id="todo-1" />
          <input
            type="text"
            id="new-todo-input"
            className="input input__sm"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            placeholder="Staff Name"
          />
          <button type="submit" className="btn toggle-btn btn__sm">
            submit
          </button>
          <button type="submit" className="btn toggle-btn btn__sm">
            cancel
          </button>
        </div>
        <div>
          <Todolist name="Work 3" completed={true} id="todo-2" />
          <input
            type="text"
            id="new-todo-input"
            className="input input__sm"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            placeholder="Staff Name"
          />
          <button type="submit" className="btn toggle-btn btn__sm">
            submit
          </button>
          <button type="submit" className="btn toggle-btn btn__sm">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
