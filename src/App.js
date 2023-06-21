import { useState, useEffect } from "react";
import "./App.css";

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
  const handleClick = (todo) => {
    remove(e.target.preTodo);
    if (isEditing) {
    } else {
    }
  };
 


  
  return (
    <div className="App">
    
        <div
          className="nav1"
          style={{
            width: "350px",
            height: "250px",
            fontSize: "18px",
            fontWeight: "600",
            borderRadius: "25px 25px 25px 25px",
            borderTop: "4px solid silver",
            borderBottom: "4px solid silver",
          }}
        >
          <div style={{ marginLeft: "6.5rem" }}>
            <div style={{ fontSize: "30px" }}> To Do Lists</div>
          </div>

          <input
            style={{
              backgroundColor: "#efb2fb",
              border: "3px solid #ff008450",
              width: "160px",
              height: "16px",
              borderRadius: "4px 4px 4px 4px",
              marginLeft: "10px",
            }}
            value={input}
            placeholder="New to do list."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            style={{
              backgroundColor: "#ff008450",
              border: "3px solid #ff008450",
              fontWeight: "700",
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

          <div className="clickcolumn">
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
                        fontWeight: "800",
                        borderRadius: "7px 7px 7px 7px",
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
          <div className="Todo">
            <form className="Todo-edit-form" onSubmit={handleClick}>
              <input
                onChange={handleClick}
                value={input}
                placeholder="Edit to do list."
                style={{
                  backgroundColor: "#efb2fb",
                  border: "3px solid #ff008450",
                  width: "160px",
                  height: "16px",
                  borderRadius: "4px 4px 4px 4px",
                  marginLeft: "10px",
                }}
              />
              <button
                style={{
                  backgroundColor: "#ff008450",
                  border: "3px solid #ff008450",
                  fontWeight: "700",
                  borderRadius: "4px 4px 4px 4px",
                  marginLeft: "3px",
                }}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
