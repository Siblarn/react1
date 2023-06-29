import { Outlet, Link } from "react-router-dom";
import button from "./Button";
import { Button } from "bootstrap";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <Navbar />
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
