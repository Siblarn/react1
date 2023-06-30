import { Outlet, Link } from "react-router-dom";
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
