import { Outlet, Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
    <nav>
      <ul className="flex">
        <li>
          <Link to="/">ToDoList</Link>
        </li>
        <li className="ml-5">
        <Link to="/Test">Test ToDoList</Link>
        </li>
        <li>
          
        </li>
      </ul>
    </nav>

    <Outlet />
  </div>
  );
}