import React from "react";

export default function Navbar(prop) {
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
    setTodo(e.target.input);

    checkboxes.forEach((item) => {
      item !== checkbox ? setChecked(false) : setChecked(true);
    });
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

  // const [isEditing, setIsEditing] = useState(false);
  // const toggleFrom = (e) => {
  //   setIsEditing(!isEditing);
  // };

  return (
    <>
      <input
        style={{
          backgroundColor: "white",
          border: "1.5px solid gray",
          width: "160px",
          height: "36px",
          borderRadius: "4px 4px 4px 4px",
          marginLeft: "40rem",
        }}
        value={input}
        class="btn"
        placeholder="New to do list."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "white",
          border: "1px solid black",
          fontWeight: "450",
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

      <ul className="todo-lish">
        {todo &&
          todo.map((todo, index) => (
            <div key={todo.id}>
              {todo.text}

              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              ></button>

              <button>
                <label key={todo}>
                  <input type="checkbox" />
                  <span className="check">{"  "}</span>
                </label>
              </button>
            </div>
          ))}
      </ul>
    </>
  );
}
