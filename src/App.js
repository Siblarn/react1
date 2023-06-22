import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./component04/navbar";

function App() {
  const preTodo = [{ id: 1, text: "Assign 4", createAt: Date.now() }];
  const [todo, setTodo] = useState(preTodo);
  const [input, setInput] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleAdd() {
    const preAddTodo = {
      id: todo.length + 1,
      text: input,
      createAt: Date.now(),
    };
    const addTodo = [...todo, preAddTodo];
    setTodo(addTodo);
  }
  function handleDelete(index) {
    const filteredArr = todo.filter((obj) => obj.id !== index);
    return setTodo(filteredArr);
  }
  const [checked, setChecked] = useState(false);
  function handleChange(e, checkbox) {
    setTodo(e.target.value);

    // checkboxes.forEach((item) => {
    //   item !== checkbox ? setChecked(false) : setChecked(true);
    // });
  }
  // function handleFromSubmit() {
  //   if (todo !== "") {
  //     setTodo([
  //       ...todo,
  //       {
  //         id: todo.length + 1,
  //         text: todo,
  //       },
  //     ]);
  //   }
  //   setInput("");
  //   console.log("todo",todo);
  // }

  // function handleDeleteClick(id) {
  //   const removeItem = todos.filter((todo) => {
  //     return todo.id !== id;
  //   });
  //   setTodos(removeItem);
  // }

  // function handleEditChange(todo) {
  //   setisEditing(true);
  //   setCurrenTodo({ ...todo });
  // }

  // function handleUpdateTodo(id, updateTodo) {
  //   const updatedItem = todos.map((todo) => {
  //     return todo.id === id ? updateTodo : todo;
  //   });

  //   setisEditing(false);
  //   setTodos(updatedItem);
  // }

  // function handleEditFromSubmit(e) {
  //   e.preventDefault();
  // }

  // console.log(todos);

  const [isEditing, setIsEditing] = useState(false);
  const toggleFrom = (e) => {
    setIsEditing(!isEditing);
  };
  
  return (
    <div className="App">
      <Navbar/>

      <input
        style={{
          backgroundColor: "#efb2fb",
          border: "3px solid #ff008450",
          width: "160px",
          height: "25px",
          borderRadius: "4px 4px 4px 4px",
          marginLeft: "4rem",
        }}
        value={input}
        placeholder="New to do list."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button
        style={{
          height: "26px",
          backgroundColor: "#ff008450",
          border: "3px solid #ff008450",
          fontWeight: "500",
          borderRadius: "4px 4px 4px 4px",
          marginLeft: "3px",
        }}
        type="submit"
        onClick={() => {
          handleAdd();
        }}
      >
        Add
      </button>

      {/* </from> */}
      <ul className="todo-lish">
        {todo &&
          todo.map((todo, index) => (
            <div key={todo.id}>
              {todo.text}

              <button
                style={{
                  backgroundColor: "#ff008450",
                  border: "3.2px solid #b98cce",
                  color: "red",
                  fontWeight: "600",
                  borderRadius: "7px 7px 7px 7px",
                  marginLeft: "1rem",
                }}
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                X
              </button>

              <label key={todo}>
                <input type="checkbox" />
                <span className="check">{""}</span>
              </label>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
