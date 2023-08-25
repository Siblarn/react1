import { useState, useEffect } from "react";
import axios from "axios";
import FilterButton from "./FilterButton";
import Form from "./Form";
// import ReactDOM from "react";
// import Todolist from "./Todolist";

export default function Testfinal() {
  const [todo, setTodo] = useState(null);
  const [tododelete, setTodoelete] = useState(null);
  const [todoupdate, ssetTodoupdate] = useState(null);
  const endpoint =
    "http://61.7.237.18:747";
  const baseURL =
    "http://61.7.237.18:747/todolists";
  if(todo== null){
    axios.get(baseURL).then((response) => {
      setTodo(response.data.reverse());
      console.log(response.data);
    });
  }
 
  if (!todo) return null;
  
  const TodolistDelete = async (todo) => {
    // fetch(`${endpoint}/_id`, requestOptions)
    try {
        const response = await fetch(`http://61.7.237.18:747/todolists/${todo}` ,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
        },
        });
        if (response.ok) {
          console.log('success');
          window.location.reload();
        } else {
          console.error('error');
        }
      } catch (error) {
        console.error('error', error);
      }
    };
    const UserUpdate = id => {
      var data = {
        'id': id
      }
      fetch("http://61.7.237.18:747/todolists" ,{
        method: 'UPDATE',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(
        (result) => {
          
        }
      )
    }
      


  return (
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <h2 className="list-heading">Work List !</h2>
      <div className="todo stack-small" key={todo._id}>
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
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              onClick={() => TodolistDelete(todo._id)}
              style={{ margin: "10px", marginLeft: "40rem" }}
            ></button>
            <div
              style={{
                borderBottom: "0.5px solid gray",
                marginLeft: "5rem",
              }}
            >
              <p>
                <input type="checkbox" style={{ marginRight: "20px" }}  onClick={() => UserUpdate(todo._id)}/>
                <label for="test2"></label>
                {todo.todoName}
              </p>
            </div>
            <div style={{ marginLeft: " 32rem " }}> owner : ชื่อปลอม </div>
            <div style={{ marginLeft: "13rem" }}>{todo.createdAt}</div>
            <div style={{ marginLeft: "13rem" }}>{todo.updatedAt}</div>
            <div>{todo._id}</div>
            <div>{todo.ownerId}</div>
            <div>{todo.statusChecker}</div>
            <div>{todo.caseHandler}</div>
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
