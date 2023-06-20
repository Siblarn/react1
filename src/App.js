import { useState,useEffect } from 'react';
import './App.css';


function App() {

    const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    });
    const [todo, setTodo] = useState("");
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
  
    const [isEditting, setisEditing] = useState(false);
    const [currentTodo, setCurrenTodo] = useState({});
  
    function handleEditInPutChange(e) {
      setCurrenTodo({ ...currentTodo, text: e.target.value });
      console.log("Current Todo ", currentTodo);
    }
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    function handleInputChange(e) {
      setTodo(e.target.value);
    }
  
    function handleFromSubmit(e) {
      e.preventDefault();
      if (todo !== "") {
        setTodos([
          ...todos,
          {
            id: todo.length + 1,
            text: todo.trim(),
          },
        ]);
      }
      setTodo("");
    }
  
    function handleDeleteClick(id) {
      const removeItem = todos.filter((todo) => {
        return todo.id !== id
      })
      setTodos(removeItem);
    }
  
    function handleEditChange(todo) {
      setisEditing(true);
      setCurrenTodo({ ...todo })
    }
  
    function handleUpdateTodo(id, updateTodo) {
      const updatedItem = todos.map((todo) => {
        return todo.id === id ? updateTodo : todo;
      });
  
      setisEditing(false);
      setTodos(updatedItem);
    }
  
    function handleEditFromSubmit(e) {
      e.preventDefault();
  
      handleUpdateTodo(currentTodo.id, currentTodo);
    }
  
    console.log(todos)
  
    return (
      <div className="App">
        <h1>todolists</h1>
        {isEditting ? (
          <from onSubmit={handleEditFromSubmit}>
            <h2>Edit Todo</h2>
            <label htmFor="editTodo">Edit todo: </label>
            <input
              type="text"
              name="editTodo"
              placeholder="Edit todo"
              value={currentTodo.text}
              onChange={handleEditInPutChange}
            />
            <button type="submit">Update</button>
            <button onClick={() => setisEditing(false)}>Cancel</button>
          </from>
        ) : (
          <from onSubmit={handleFromSubmit}>
            <input
              type="text"
              name="todo"
              placeholder="create a new to do"
              value={todo}
              onChange={handleInputChange}
            />
            <button type="submit">Add</button>
          </from>
        )}
        <ul className="todo-lish">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
        
              <button onClick={() => handleEditClick(todo)}>Edit</button>
              <button onClick={() => handleDeleteClick(todo.id)}>x</button>
            </li>
          ))}
        </ul>
        </div>
  );
}

export default App;