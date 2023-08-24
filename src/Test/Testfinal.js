import { useState, useEffect } from "react";
import axios from "axios";
import FilterButton from "./FilterButton";
import Form from "./Form";
// import ReactDOM from "react";
// import Todolist from "./Todolist";

export default function Testfinal() {
  const [todo, setTodo] = useState(null);
  const baseURL =
    "https://2909-2405-9800-bc11-cade-9c61-5e56-40ae-7e88.ngrok-free.app/todolists";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTodo(response.data);
      console.log(response.data);
    });
  }, []);
  if (!todo) return null;

  return (
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <h2 className="list-heading">Work List !</h2>
      <div className="todo stack-small">
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todo.map((todo) => (
          <div className="list-group">
            <div>{todo.todoName}</div>
            <div> owner : ชื่อปลอม </div>
            <div>{todo._id}</div>
            <div>{todo.ownerId}</div>
            <div>{todo.statusChecker}</div>
            <div>{todo.createdAt}</div>
            <div>{todo.updatedAt}</div>
          </div>
        ))}
        </ul>
      </div>
     

    </div>
  );
}
