import { useState, useEffect } from 'react';
import Todolist from "./Todolist";
import FilterButton from "./FilterButton";
import  Form  from "./Form";

export default function Testfinal(props) {
    const [taskList, setTaskList] = useState("");
//     const taskList = props.tasks.map((task) => (
//     <Todolist
//       id={task.id}
//       name={task.name}
//       completed={task.completed}
//       key={task.id}
//     />
//   ));

  return (
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
      {/* <Form /> */}
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <h2 id="list-heading">Work List !</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}
