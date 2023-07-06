import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import logineiei from "../logineiei"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <Navbar />
          <div className="btn btn-outline-primary mx-0.5">
            <Link to="/newregister">testregis</Link>
          </div>
          <div className="btn btn-outline-primary mx-0.5">
            <Link to="/newlogin">testlogin</Link>
          </div>
          <logineiei/>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
