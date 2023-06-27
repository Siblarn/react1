import { useState, useEffect } from "react";

export default function Button(prop) {
  
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
    }
    const [DarkModeForm, setDarkModeForm] = useState(true);
  const handleCss = () => {
    if (DarkModeForm) {
      return "black";
    } else {
      return "white";
    }
  };

  const [textInput, setTextInput] = useState("To do list.");
  const handleErrTextInput = textInput.length === 0;
  function ErrorComponent() {
    return <p>กรอกข้อความที่มากว่า 1 ตัวอักษร</p>;
  }

  return (
    <>
       <form>
        <nav class="navbar avbar-light bg-light font-mono">
          <div class="container-fluid">
            <a class="navbar-brand mx-6 font-black italic shadow-sm">
              To Do List
            </a>
            <form class="d-flex ">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <input
          id="dark-mode"
          className="toggle"
          type="checkbox"
          name="Dark mode"
          role="switch"
          value="on"
          />
        <label htmlFor="dark-mode" className="sr">
          Dark Mode
        </label>
        <div className="darklight"></div>
        <input
          style={{
            backgroundColor: "white",
            border: "1.5px solid gray",
            width: "25rem",
            height: "55px",
            borderRadius: "4px 4px 4px 4px",
            marginLeft: "20rem",
          }}
          value={input}
          class="btn"
          placeholder="New to do list."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          />
        <button
          type="button"
          class="btn btn-outline-secondary m-2"
          type="submit"
          onClick={() => {
            handleAdd();
          }}
          >
          Add
        </button>
        <form
          className="form-floating "
          style={{ height: "120px", width: "18rem", marginLeft: "28rem" }}
        >
          <input
            type="To do list."
            className="form-control is-invalid"
            id="todo"
            placeholder="todo"
            defaultValue="กรอกข้อความมากกว่า 1 ตัวอักษร  "
            />
          <label>-หมายเหตุ-</label>
        </form>

        <div>
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            />
          {handleErrTextInput && <ErrorComponent />}
        </div>

        <div class="container">
          <div class="row">
            <div class="col order-first ">
              Column 1
              <ul className="todo-lish ">
                {todo &&
                  todo.map((todo, index) => (
                    <div key={todo.id}>
                      {todo.text}

                      <button
                        type="button"
                        class="btn btn-outline-secondary ml-5"
                      >
                        EDIT
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary m-1"
                        onClick={() => {
                          handleDelete(todo.id);
                        }}
                        >
                        DELETE
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary m-0.25"
                        >
                        <label key={todo}>
                          <input type="checkbox" />
                          <span className="checkbox">{"  "}</span>
                        </label>
                      </button>

                      <div
                        class="btn-group m-2 "
                        role="group"
                        aria-label="Basic outlined example"
                        ></div>
                    </div>
                  ))}
              </ul>
            </div>
            <div class="col">
              Column 2
              {todo.map((todo, index) => (
                <div key={index}> {todo.text}</div>
                ))}
            </div>
          </div>
        </div>
      </form>
    </>
  );

}
