import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const preTodo = [{ id: 1, text: "Helloworld !", createAt: Date.now() }];
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

  return (
    <div className="App">
      <h1>todolists</h1>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
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
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
