import { useState, useEffect } from "react";
import axios from "axios";
import FilterButton from "./FilterButton";
import Form from "./Form";
// import ReactDOM from "react";
// import Todolist from "./Todolist";

export default function Testfinal() {
  const [todo, setTodo] = useState(null);
  const baseURL =
    "https://2c2e-2001-fb1-2d-352d-96f-ee87-a38b-e725.ngrok-free.app/todolists";
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
      <div className="todo stack-small"  key={todo._id}>
        {todo.map((todo) => (
          <div
            className="list-group"
            key={todo._id}
            style={{
              border: "1px solid gray",
              borderRadius: "20px 20px",
              display: "flex",
            }}
          >
            <div
              style={{
                borderBottom: "0.5px solid gray",
                marginLeft: "10rem",
                marginTop: "10px",
              }}
            >
              <p>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Yellow</label>
                {todo.todoName}
              </p>
            </div>
            <div style={{ marginLeft: " 32rem " }}> owner : ชื่อปลอม </div>
            <div style={{ marginLeft: "13rem" }}>{todo.createdAt}</div>
            <div style={{ marginLeft: "13rem" }}>{todo.updatedAt}</div>
            <div>{todo._id}</div>
            <div>{todo.ownerId}</div>
            <div>{todo.statusChecker}</div>
          </div>
        ))}
        {/* <div className="list-group" key={todo._id}>
            <div>{todo.todoName}</div>
            <div> owner : ชื่อปลอม </div>
            <div>{todo._id}</div>
            <div>{todo.ownerId}</div>
            <div>{todo.statusChecker}</div>
            <div>{todo.createdAt}</div>
            <div>{todo.updatedAt}</div>
          </div> */}
      </div>
    </div>
  );
}
