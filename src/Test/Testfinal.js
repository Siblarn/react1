import { useState, useEffect } from "react";
import ReactDOM from "react";
import Todolist from "./Todolist";
import FilterButton from "./FilterButton";
import Form from "./Form";

export default function Testfinal(props) {

  return (
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
      <Form />
      {/* <Form addTask={addTask} /> */}

      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <h2 id="list-heading">Work List !</h2>
        <Todolist name="Work 1" completed={true} id="todo-0"/>
        <Todolist name="Work 2" completed={true} id="todo-1"/>
        <Todolist name="Work 3" completed={true} id="todo-2"/>
    </div>
  );
}
