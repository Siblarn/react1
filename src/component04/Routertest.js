import { Outlet, Link } from "react-router-dom";
// import Navbar from "./Navbar";
import button from "./Button";
import { Button } from "bootstrap";

const Layout = () => {
  return (
    <>

      <nav>
        <ul>
          <li>
            <Link to="/">Mini Project</Link>
          </li>
          <li>
          <Link to="/Resume">Resume</Link>
          </li>
          <li>
            <Link to="/Todolist">Todolist</Link>
          </li>
          <li>
            <Link to="/TicTac">TicTac</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
