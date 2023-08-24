import { useState } from "react";
import axios from "axios";
import FilterButton from "./FilterButton";
import Form from "./Form";
// import ReactDOM from "react";
// import Todolist from "./Todolist";

export default function Testfinal() {
  const [todo, setTodo] = useState({});
  try {
    axios
      .get(
        "https://2909-2405-9800-bc11-cade-9c61-5e56-40ae-7e88.ngrok-free.app/todolists"
      )
      .then(function (item: any) {
        setTodo(todo.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
  return (
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
      <Form />
      {/* <Form addTask={addTask} /> */}

      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <h2 id="list-heading">Work List !</h2>
      <div>
        {todo.length > 0 &&
          todo.map((item: any) => (
            <div>
              <div>{item.todoName}</div>
              <div>{item.ownerId}</div>
              <div>{item.statusChecker}</div>
            </div>
          ))}
      </div>
      {/* <Todolist name="Work 1" completed={true} id="todo-0"/>
        <Todolist name="Work 2" completed={true} id="todo-1"/>
        <Todolist name="Work 3" completed={true} id="todo-2"/> */}
    </div>
  );
}
