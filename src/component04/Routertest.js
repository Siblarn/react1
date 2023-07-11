import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Registereiei from "../Registertest/Registereiei";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <Navbar />
          <Registereiei />
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
